import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  ITransaction,
  TransactionsContext,
} from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((item: ITransaction) => {
              return (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td align="right">
                    <PriceHighlight $variant={item.type}>
                      {item.type === 'outcome' && '- '}
                      {priceFormatter.format(item.price)}
                    </PriceHighlight>
                  </td>
                  <td>{item.category}</td>
                  <td>{dateFormatter.format(new Date(item.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
