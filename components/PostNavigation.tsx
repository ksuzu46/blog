import Link from 'next/link'
import { Post } from '@/types/post'
import styles from './PostNavigation.module.scss'

interface PostNavigationProps {
  prev: Partial<Post> | null
  next: Partial<Post> | null
}

export default function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null

  return (
    <nav className={styles.nav}>
      {prev ? (
        <Link href={`/${prev.slug}`} className={styles.link}>
          <span className={styles.label}>← Previous</span>
          <span className={styles.title}>{prev.emoji} {prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/${next.slug}`} className={`${styles.link} ${styles.next}`}>
          <span className={styles.label}>Next →</span>
          <span className={styles.title}>{next.emoji} {next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
