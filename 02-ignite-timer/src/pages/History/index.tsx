import { HistoryContainer, HistoryList, StatusIndicator } from './styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há tanto tempo</td>
              <td>
                <StatusIndicator statusColor="green">
                  Em andamento
                </StatusIndicator>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há tanto tempo</td>
              <td>
                <StatusIndicator statusColor="yellow">
                  Em andamento
                </StatusIndicator>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há tanto tempo</td>
              <td>
                <StatusIndicator statusColor="red">
                  Em andamento
                </StatusIndicator>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
