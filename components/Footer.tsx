import { ghUrl, ghUsername } from '@/lib/constants'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.content}>
      <div className={styles.inner}>
        <a href={`${ghUrl}/blog`} rel="nofollow">
          SourceCode
        </a>
        <div>&copy; 2020 {ghUsername}</div>
      </div>
    </div>
  )
}
