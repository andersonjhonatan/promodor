import styled from 'styled-components'

const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: calc(100% - 5rem);
  margin: 0 auto;

  h1 {
    margin: 2rem 0 3rem 0;
  }

  div {
    display: flex;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 3rem;
  }
`

const TableContainer = styled.table`
  width: 100%;
  border-radius: 8px;
  border-collapse: collapse;

  thead {
    tr {
      background-color: ${(props) => props.theme['cinza-300']};
      
      th {
        padding: 1.5rem;
        font-size: 1.2rem;
      }
  }
`

const TbodyContainer = styled.tbody`
  tr {
    background-color: ${(props) => props.theme['cinza-100']};
    box-shadow: 0 0 0 4px ${(props) => props.theme['cinza-700']};

    td {
      padding: 1rem;
      font-size: 1.2rem;
      text-align: center;
    }
  }
`
export { HistoryContainer, TableContainer, TbodyContainer }
