import styles from './TaskHeader.module.css'

interface TaskHeaderType {
  total: number
  done: number
}

export const TaskHeader = ({ total, done }: TaskHeaderType) => {
  return (
    <header className={styles.wrap}>

      <aside className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <span>{total}</span>
      </aside>

      <aside className={styles.doneTasks}>
        <p>Concluídas</p>
        <span>{
          done > 0 ? (`${done} de ${total}`) : 0
        }</span>
      </aside>

    </header>
  )
}