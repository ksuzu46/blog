import Link from 'next/link'
import styles from './LanguageLabel.module.scss'

interface LanguageLabelProps {
  lang: string
}

export default function LanguageLabel({ lang }: LanguageLabelProps) {
  const labelColor = lang === 'en' ? '#2196F3' : '#FFC107'

  return (
    <Link href={`/languages/${lang}`}>
      <div className={styles.wrapper}>
        <div className={styles.text} style={{ background: labelColor }}>
          {lang.toUpperCase()}
        </div>
      </div>
    </Link>
  )
}
