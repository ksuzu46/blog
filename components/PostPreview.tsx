import Link from 'next/link'
import twemoji from '@twemoji/api'
import LanguageLabel from './LanguageLabel'
import DateFormatter from './DateFormatter'
import styles from './PostPreview.module.scss'

interface PostPreviewProps {
  title: string
  date: string
  emoji: string
  slug: string
  lang: string
  excerpt?: string
}

export default function PostPreview({ title, date, emoji, slug, lang, excerpt }: PostPreviewProps) {
  const parsedEmoji = twemoji.parse(emoji || '🐱', {
    folder: 'svg',
    ext: '.svg',
  })

  return (
    <div className={styles.wrapper}>
      <Link href={`/${encodeURIComponent(slug)}`} className={styles.link}>
        <div className={styles.emoji} dangerouslySetInnerHTML={{ __html: parsedEmoji }} />
        <div className={styles.content}>
          <h3>{title}</h3>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
          <DateFormatter dateString={date} />
          <LanguageLabel lang={lang} />
        </div>
      </Link>
    </div>
  )
}
