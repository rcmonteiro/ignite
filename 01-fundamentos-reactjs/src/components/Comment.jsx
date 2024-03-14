import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

export const Comment = (props) => {
  return (
    <div className={styles.comment}>
      <Avatar image="https://github.com/rcmonteiro.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ricardo Monteiro</strong>
              <time title="11 de maio às 08h13" dateTime="2022-05-11 08:13:38">Publicado cerca de 1 hora</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>(20)</span>
          </button>
        </footer>
      </div>
    </div>
  )
}