import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import Avatar from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}


export const Comment = ({content, onDeleteComment}: CommentProps) => {

  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleLikeComment = () => {
    // setLikeCount(likeCount +  1)

    setLikeCount((state) => {
      return state + 1
    })


  }
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/rcmonteiro.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ricardo Monteiro</strong>
              <time title="11 de maio às 08h13" dateTime="2022-05-11 08:13:38">Publicado cerca de 1 hora</time>
            </div>
            <button onClick={() => handleDeleteComment()} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>({likeCount})</span>
          </button>
        </footer>
      </div>
    </div>
  )
}