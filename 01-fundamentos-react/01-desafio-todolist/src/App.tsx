import styles from './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskHeader} from './components/TaskHeader'
import { TaskEmptyState } from './components/TaskEmptyState'
import { Task, TaskType } from './components/Task'
import { useEffect, useState } from 'react'

export const App = () => {

  const [tasks, setTasks] = useState<TaskType[]>([])
  const [total, setTotal] = useState(0)
  const [done, setDone] = useState(0)

  const createNewTask = (content: string) => {
    const newTask: TaskType = {
      done: false,
      content
    }
    setTasks([...tasks,newTask])
  }

  const deleteTask = (taskToDelete: string) => {
    const tasksWithoutDeleted = tasks.filter((item) => {
      if(item.content !== taskToDelete)
        return item
    })
    setTasks(tasksWithoutDeleted)
  }

  const toggleTask = (taskToChange: string) => {
    const modifiedTasks = tasks.map(item => {
      return ({
        done: item.content === taskToChange ? !item.done : item.done,
        content: item.content
      })
    })
    setTasks(modifiedTasks)
  }

  useEffect(() => {
    const totalTasks = tasks.length
    setTotal(totalTasks)

    const doneTasks = tasks.reduce((ac, current)=> ac + (current.done ? 1 : 0), 0 )
    setDone(doneTasks)
  },[tasks])

  return (
    <div className={styles.wrap}>
      <Header/>
      <main>
        <NewTask
          createNewTask={createNewTask}
        />
        <TaskHeader
          total={total}
          done={done}
        />
        { tasks.length === 0 && <TaskEmptyState/>}
        {tasks.map(task => {
          return (
            <Task 
              key={task.content} 
              content={task.content}
              done={task.done}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          )
        })}
      </main>
    </div>
  )
}