import DateFormatter from './DateFormatter'
import LanguageLabel from './LanguageLabel'

interface PostHeaderProps {
  title: string
  date: string
  lang: string
  readingTime?: string
}

export default function PostHeader({ title, date, lang, readingTime }: PostHeaderProps) {
  return (
    <>
      <div className="blog-post-heading-wrapper">
        <h3 className="blog-post-heading">{title}</h3>
        <h6 className="blog-post-heading-date">
          <DateFormatter dateString={date} />
          {readingTime && <span style={{ marginLeft: '0.75em', opacity: 0.7 }}>· {readingTime}</span>}
        </h6>
      </div>
      <LanguageLabel lang={lang} />
    </>
  )
}
