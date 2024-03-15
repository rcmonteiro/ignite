import styles from './App.module.css'
import { Header } from './components/common/Header'
import { NewTask } from './components/task/NewTask'
import { TaskHeader} from './components/task/TaskHeader'
import { TaskEmptyState } from './components/task/TaskEmptyState'
import { Task } from './components/task/Task'
import { useEffect, useState } from 'react'


export interface ITask {
  id: number
  done: boolean
  content: string
}

export const App = () => {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [total, setTotal] = useState(0)
  const [done, setDone] = useState(0)

  const createNewTask = (content: string) => {
    const newTask: ITask = {
      id: new Date().getTime(),
      done: false,
      content
    }
    setTasks([...tasks,newTask])
  }

  const deleteTask = (taskToDelete: number) => {
    const tasksWithoutDeleted = tasks.filter((item) => {
      if(item.id !== taskToDelete)
        return item
    })
    setTasks(tasksWithoutDeleted)
  }

  const toggleTask = (taskToChange: number) => {
    const modifiedTasks = tasks.map(item => {
      return ({
        id: item.id,
        done: item.id === taskToChange ? !item.done : item.done,
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
    <main className={styles.wrap}>
      <Header/>
      <section>
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
              key={task.id} 
              data={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          )
        })}
      </section>
    </main>
  )
}