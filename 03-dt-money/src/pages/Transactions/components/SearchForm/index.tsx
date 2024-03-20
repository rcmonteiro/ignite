import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import loading from '../../../../assets/loading.svg'
import { useTransactions } from '../../../../hooks/useTransactions'
import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type ISearchForm = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const { fetchTransactions } = useTransactions()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ISearchForm>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleFilterTransactions = async (data: ISearchForm) => {
    await fetchTransactions(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleFilterTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button disabled={isSubmitting}>
        {isSubmitting ? (
          <img src={loading} alt="" width={80} />
        ) : (
          <>
            <MagnifyingGlass size={20} />
            Buscar
          </>
        )}
      </button>
    </SearchFormContainer>
  )
}
