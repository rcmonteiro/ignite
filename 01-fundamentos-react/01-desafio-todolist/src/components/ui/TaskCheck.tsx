import styles from './TaskCheck.module.css'

interface TaskCheck {
  done: boolean
  toggleTask?: () => void
}

export const TaskCheck = ({ done, toggleTask }: TaskCheck) => {
  return done ? (
    <div 
      onClick={toggleTask} 
      className={`${styles.check} ${styles.done}`}
    ><img src="/assets/icons/check.svg" alt="check" width={8} height={8} /></div>
  ) : (
    <div 
      onClick={toggleTask} 
      className={`${styles.check}`} />
  )
}