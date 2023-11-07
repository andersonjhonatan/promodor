/* eslint-disable prettier/prettier */
import styled, { keyframes } from 'styled-components'
import { VscLoading } from 'react-icons/vsc'
import { BsSearchHeart } from 'react-icons/bs'

const BsSearchHeartStyled = styled(BsSearchHeart)`
  color: ${(props) => props.theme['cinza-400']};
`

const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  height: calc(100% - 5rem);
`

const ContainerTitle = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0 3rem 0;

  form {
    position: relative;
    width: 25%;
    display: flex;

    button {
      position: absolute;
      right: 0;
      padding: 8px;
      display: flex;
      justify-content: center;
      background-color: transparent;
      border: 0;
    }

    input {
      width: 100%;
      margin-left: 5px;
      color: ${(props) => props.theme['cinza-100']};

      &:focus {
        background-color: ${(props) => props.theme['cinza-700']};
        color: ${(props) => props.theme['cinza-100']};
      }

      &::placeholder {
        color: ${(props) => props.theme['cinza-300']};
      }
    }
  }
`

const ContainerMain = styled.div`
  overflow: auto;
  max-height: 450px;
  width: 100%;
  margin-bottom: 50px;
  border-radius: 8px 20px 20px 8px;

  &::-webkit-scrollbar {
    width: 8px;
    color: ${(props) => props.theme['blue-200']};
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['blue-200']};
    border-radius: 3px;
  }
`

const TableContainer = styled.table`
  width: 100%;
  border-radius: 8px;
  border-collapse: collapse;
  scroll-behavior: smooth;
`

const TheadContainer = styled.thead`
  position: sticky;
  top: 0;
  th {
    padding: 1.5rem 0;
    font-size: 1.2rem;
    background-color: ${(props) => props.theme['cinza-500']};
    text-align: left;
    padding-left: 1rem;

    &:first-child {
      padding-left: 1.5rem;
    }
  }
`
const TbodyContainer = styled.tbody`
  text-align: left;
  tr {
    background-color: ${(props) => props.theme['cinza-600']};
    box-shadow: 0 0 0 4px ${(props) => props.theme['cinza-700']};

    td {
      padding: 1rem;
      font-size: 1.2rem;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
    }
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled(VscLoading)`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme['blue-100']};
`

const LoadingSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
`

const STATUS_COLORS = {
  green: 'success',
  yellow: 'yellow-200',
  red: 'vermelho-200',
} as const

interface StatusProps {
  statuscolor: keyof typeof STATUS_COLORS
}

const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    margin-right: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[STATUS_COLORS[props.statuscolor]]};
  }
`

export {
  HistoryContainer,
  TableContainer,
  TbodyContainer,
  ContainerMain,
  TheadContainer,
  Rotate,
  LoadingSection,
  ContainerTitle,
  BsSearchHeartStyled,
  Status,
}
