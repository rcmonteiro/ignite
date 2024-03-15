import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  border?: boolean
}

const Avatar = ({ border = false, ...props }: AvatarProps) => {
  return (
    <img 
      className={`
        ${styles.avatar} ${border && styles.border}
      `} 
      {...props}
    />
  )
}

export default Avatar