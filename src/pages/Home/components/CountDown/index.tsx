import { useContext, useEffect, useState } from 'react'
import { CountdownDiv } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CycleContext } from '../..'

const CountDown = () => {
  const { activeCycle, activeCycleId, setCycles } = useContext(CycleContext)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const minutes = String(minutesAmount).padStart(2, '0')

  const secondsAmount = currentSeconds % 60
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Anderson Timer`
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDf = differenceInSeconds(new Date(), activeCycle.startDate)

        if (secondsDf >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishDate: new Date() }
              } else {
                return cycle
              }
            }),
          )
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDf)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
      activeCycle &&
        setCycles((state) =>
          state.filter((cycle) => cycle.id !== activeCycleId),
        )
    }
  }, [activeCycle, totalSeconds, activeCycleId, setCycles])

  return (
    <CountdownDiv>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <p>:</p>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownDiv>
  )
}

export default CountDown
