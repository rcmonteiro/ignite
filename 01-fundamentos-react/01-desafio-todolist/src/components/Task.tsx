import styles from './Task.module.css'
import { TaskCheck } from './ui/TaskCheck'
import { Trash } from '@phosphor-icons/react'

export interface TaskType {
  done: boolean
  content: string
  deleteTask?: (content: string) => void
  toggleTask?: (content: string) => void
}

export const Task = ({ done = false, content, deleteTask, toggleTask }: TaskType) => {

  const handleDeleteTask = () => {
    deleteTask?.(content)
  }
  
  const handleToggleTask = () => {
    toggleTask?.(content)
  }

  return (
    <div className={`${styles.card} ${done && styles.done}`}>

      <TaskCheck 
        done={done} 
        toggleTask={handleToggleTask}
      />
      
      <span>{content}</span>
      
      <button 
        className={styles.trash}
        onClick={handleDeleteTask}
      >
        <Trash/>
      </button>

    </div>
  )
}