import Link from 'next/link'

interface LanguageLabelProps {
  lang: string
}

export default function LanguageLabel({ lang }: LanguageLabelProps) {
  const labelColor = lang === 'en' ? '#2196F3' : '#FFC107'

  return (
    <Link href={`/languages/${lang}`}>
      <div className="label-wrapper">
        <div className="label-text" style={{ background: labelColor }}>
          {lang.toUpperCase()}
        </div>
      </div>
    </Link>
  )
}
