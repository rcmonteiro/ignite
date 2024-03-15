import styles from './Sidebar.module.css'
import Avatar from './Avatar'
import { PencilLine } from "@phosphor-icons/react";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://source.unsplash.com/random" alt="Image"/>
      
      <div className={styles.profile}>
        <Avatar border src="https://github.com/rcmonteiro.png"/>
        <strong>Ricardo Monteiro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}