import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './NewTask.module.css'

interface NewTaskType {
  createNewTask: (newTask: string) => void
}

export const NewTask = ({ createNewTask }: NewTaskType) => {

  const [newTask, setNewTask] = useState('')

  const handleNewTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleNewTaskCreate = (e: FormEvent) => {
    e.preventDefault()
    createNewTask(newTask)
    setNewTask('')
  }

  return (
    <form onSubmit={handleNewTaskCreate} className={styles.form}>
      <input 
        placeholder='Adicione uma nova tarefa'
        value={newTask}
        onChange={handleNewTaskChange}
      />
      <button type="submit">
        Criar
        <img alt="Criar" src='/assets/icons/plus.svg' width={16} height={16}/>
      </button>
    </form>
  )
}