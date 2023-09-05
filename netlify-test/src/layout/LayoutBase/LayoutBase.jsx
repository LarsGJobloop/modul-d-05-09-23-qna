import styles from './LayoutBase.module.css'

export function LayoutBase(props) {
  const {children} = props

  return (
    <div className={styles.App}>
      <header>
        <div>Logo Placeholder</div>
      </header>

      {children}

      <footer>
        <p>by Lars Gunnar</p>
      </footer>
    </div>
  )
}