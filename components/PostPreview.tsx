import Link from 'next/link'
import twemoji from '@twemoji/api'
import LanguageLabel from './LanguageLabel'
import DateFormatter from './DateFormatter'

interface PostPreviewProps {
  title: string
  date: string
  category: string
  emoji: string
  slug: string
  lang: string
}

export default function PostPreview({ title, date, emoji, slug, lang }: PostPreviewProps) {
  const parsedEmoji = twemoji.parse(emoji || '🐱', {
    folder: 'svg',
    ext: '.svg',
  })

  return (
    <div className="post-card-wrapper">
      <Link href={`/${encodeURIComponent(slug)}`} className="post-card-link">
        <div className="post-card-emoji" dangerouslySetInnerHTML={{ __html: parsedEmoji }} />
        <div className="post-card-content">
          <h3>{title}</h3>
          <DateFormatter dateString={date} />
          <LanguageLabel lang={lang} />
        </div>
      </Link>
    </div>
  )
}
