import { ITask } from '../../App'
import styles from './Task.module.css'
import { TaskCheck } from '../common/TaskCheck'
import { Trash } from '@phosphor-icons/react'

export interface TaskProps {
  data: ITask
  deleteTask?: (id: number) => void
  toggleTask?: (id: number) => void
}

export const Task = ({ data, deleteTask, toggleTask }: TaskProps) => {

  const handleDeleteTask = () => {
    deleteTask?.(data.id)
  }
  
  const handleToggleTask = () => {
    toggleTask?.(data.id)
  }

  return (
    <div className={`${styles.card} ${data.done && styles.done}`}>

      <TaskCheck 
        done={data.done} 
        toggleTask={handleToggleTask}
      />
      
      <span>{data.content}</span>
      
      <button 
        className={styles.trash}
        onClick={handleDeleteTask}
      >
        <Trash/>
      </button>

    </div>
  )
}