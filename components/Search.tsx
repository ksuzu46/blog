'use client'

import { useEffect, useRef, useState } from 'react'
import Fuse from 'fuse.js'
import Link from 'next/link'
import styles from './Search.module.scss'

interface SearchItem {
  title: string
  slug: string
  category: string
  emoji: string
  excerpt: string
}

export default function Search() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const [index, setIndex] = useState<Fuse<SearchItem> | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((data: SearchItem[]) => {
        setIndex(new Fuse(data, { keys: ['title', 'excerpt', 'category'], threshold: 0.3 }))
      })
  }, [open])

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  useEffect(() => {
    if (!index || !query.trim()) {
      setResults([])
      return
    }
    setResults(index.search(query).map((r) => r.item).slice(0, 8))
  }, [query, index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <button className={styles.trigger} onClick={() => setOpen(true)} aria-label="Search">
        🔍 <kbd className={styles.kbd}>⌘K</kbd>
      </button>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <input
              ref={inputRef}
              className={styles.input}
              type="text"
              placeholder="Search posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {results.length > 0 && (
              <ul className={styles.results}>
                {results.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/${item.slug}`} className={styles.result} onClick={() => setOpen(false)}>
                      <span className={styles.emoji}>{item.emoji}</span>
                      <div>
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.excerpt}>{item.excerpt}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {query && results.length === 0 && index && (
              <p className={styles.empty}>No results found</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
