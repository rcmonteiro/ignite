import styles from './Avatar.module.css'

const Avatar = (props) => {
  return (
    <img 
      className={`
        ${styles.avatar} ${props.border && styles.border}
      `} 
      src={props.image} 
    />
  )
}

export default Avatar