'use client'

import { useState } from 'react'
import styles from './ShareButtons.module.scss'

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable
    }
  }

  return (
    <div className={styles.share}>
      <span className={styles.label}>Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Share on X"
      >
        𝕏
      </a>
      <a
        href={`https://b.hatena.ne.jp/entry/${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Share on Hatena Bookmark"
      >
        B!
      </a>
      <button onClick={copyLink} className={styles.button} aria-label="Copy link">
        {copied ? '✓' : '🔗'}
      </button>
    </div>
  )
}
