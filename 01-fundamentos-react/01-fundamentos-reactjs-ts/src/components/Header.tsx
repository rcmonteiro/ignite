import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'
console.log(igniteLogo)
export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt='ignite logo'/>
      <h1>Ignite Feed</h1>
    </header>
  )
}