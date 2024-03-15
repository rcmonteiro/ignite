import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'


// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rcmonteiro.png",
      name: "Ricardo Monteiro",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }      
    ],
    publishedAt: new Date('2024-03-11 08:13:38')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rcmonteiro.png",
      name: "Larry Page",
      role: "Google Founder"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Um novo post aqui, fazendo testes' },
      { type: 'link', content: 'rcmonteiro.com' }      
    ],
    publishedAt: new Date('2024-01-10 18:13:38')
  }
]

export const App = () => {
  
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )})}
        </main>
      </div>
      
    </>
    
  )
}
