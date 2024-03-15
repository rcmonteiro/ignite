import styles from './TaskHeader.module.css'

interface TaskHeaderType {
  total: number
  done: number
}

export const TaskHeader = ({ total, done }: TaskHeaderType) => {
  return (
    <div className={styles.wrap}>

      <div className={styles.createdTasks}>
        Tarefas criadas
        <span>{total}</span>
      </div>

      <div className={styles.doneTasks}>
        Concluídas
        <span>{done}</span>
      </div>

    </div>
  )
}