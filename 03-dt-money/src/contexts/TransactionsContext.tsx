import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface ITransaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: Date
}

interface ITransactionsProvider {
  children: ReactNode
}

interface ICreateTransaction {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}

interface ITransactionsContext {
  transactions: ITransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: ICreateTransaction) => Promise<void>
}

export const TransactionsContext = createContext({} as ITransactionsContext)

export const TransactionsProvider = ({ children }: ITransactionsProvider) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(async (data: ICreateTransaction) => {
    const { description, category, type, price } = data
    const addedTransaction = await api.post('/transactions', {
      description,
      category,
      type,
      price,
      createdAt: new Date(),
    })
    setTransactions((state) => [addedTransaction.data, ...state])
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
