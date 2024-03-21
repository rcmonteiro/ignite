import * as Dialog from '@radix-ui/react-dialog'
import { memo, useState } from 'react'
import logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

const HeaderComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModel = (open: boolean) => {
    setIsModalOpen(open)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal handleOpenModel={handleOpenModel} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export const Header = memo(HeaderComponent)
