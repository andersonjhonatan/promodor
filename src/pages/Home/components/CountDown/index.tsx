import { useContext, useEffect } from 'react'
import { CountdownDiv } from './styles'
import { differenceInSeconds } from 'date-fns'
import { ContextCyle } from '../../../../Context/contextProvider'

const CountDown = () => {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setAmountSecondsPassed,
  } = useContext(ContextCyle)

  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const minutes = String(minutesAmount).padStart(2, '0')

  const secondsAmount = currentSeconds % 60
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Anderson Timer`
    } else {
      document.title = ' 00:00 - Anderson Timer'
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDf = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDf >= totalSeconds) {
          markCurrentCycleAsFinished()
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDf)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    setAmountSecondsPassed,
    markCurrentCycleAsFinished,
  ])

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
