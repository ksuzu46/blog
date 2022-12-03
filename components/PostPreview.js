import React from 'react'
import Link from 'next/link'
import twemoji from 'twemoji'
import LanguageLabel from './LanguageLabel'
import DateFormatter from './DateFormatter'

const MyLink = React.forwardRef(({ onClick, href, emoji, title, date, lang }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} className="post-card-link">
            <div className="post-card-emoji" dangerouslySetInnerHTML={{ __html: emoji }} />
            <div className="post-card-content">
                <h3>{title}</h3>
                <DateFormatter dateString={date} />
                <LanguageLabel lang={lang} />
            </div>
        </a>
    )
})

export default function PostPreview({ title, date, category, emoji, slug, lang }) {
    const parsedEmoji = twemoji.parse(emoji || '🐱', {
        folder: 'svg',
        ext: '.svg'
    })

    return (
        <div className="post-card-wrapper">
            <Link href={`/${encodeURIComponent(slug)}`} passHref>
                <MyLink emoji={parsedEmoji} title={title} date={date} lang={lang} />
            </Link>
        </div>
    )
}
