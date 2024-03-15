import styles from './TaskEmptyState.module.css'

export const TaskEmptyState = () => {
  return (
    <div className={styles.wrap}>

      <img src="/assets/icons/clipboard.svg" alt="Clipboard icon" width={56} height={56} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      Crie tarefas e organize seus itens a fazer

    </div>
  )
}