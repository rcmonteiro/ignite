import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/assets/images/rocket.svg" alt="todo" width={22} height={36} />
      <h1>to<span>do</span></h1>
    </header>
  )
}