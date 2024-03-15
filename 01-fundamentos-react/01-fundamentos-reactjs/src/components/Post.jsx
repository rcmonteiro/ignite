import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Avatar from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export const Post = ({ author, content, publishedAt }) => {

  const [comments, setComments] = useState(['Post bacana demais!'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{ locale: ptBR, addSuffix: true })

  const handleCreateNewComment = (e) => {
    e.preventDefault()
    setComments([...comments,newCommentText])
    setNewCommentText('')
  }

  const handleNewCommentInvalid = (e) => {
    console.log(e)
    e.target.setCustomValidity('Comentário é obrigatório')
  }

  const onNewCommentChange = (e) => {
    e.target.setCustomValidity('')
    setNewCommentText(e.target.value)
  }

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty= newCommentText.length===0
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar border image={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      
      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'link') {
            return (
              <p key={item.content}><a href={item.content}>{item.content}</a></p>
            )
          } else {
            return (
              <p key={item.content}>{item.content}</p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea 
          required
          name="comment"
          placeholder='Deixe seu comentário'
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          onChange={onNewCommentChange}
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>        
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>

    </article>
  )
}