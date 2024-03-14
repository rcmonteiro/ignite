import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

export const App = () => {
  
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
          author="Rick" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus nobis libero modi eaque, iure labore cumque tempora facere repellat perferendis quidem illum odio magnam deleniti quibusdam fugiat incidunt velit fugit."
          />
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </main>
      </div>
      
    </>
    
  )
}
