'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
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
  const indexRef = useRef<Fuse<SearchItem> | null>(null)
  const [indexReady, setIndexReady] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const loadIndex = useCallback(() => {
    if (indexRef.current) {
      setIndexReady(true)
      return
    }
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((data: SearchItem[]) => {
        indexRef.current = new Fuse(data, { keys: ['title', 'excerpt', 'category'], threshold: 0.3 })
        setIndexReady(true)
      })
  }, [])

  useEffect(() => {
    if (open) loadIndex()
  }, [open, loadIndex])

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  useEffect(() => {
    if (!indexRef.current || !query.trim()) {
      setResults([])
      return
    }
    setResults(indexRef.current.search(query).map((r) => r.item).slice(0, 8))
  }, [query, indexReady])

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
            {query && results.length === 0 && indexRef.current && (
              <p className={styles.empty}>No results found</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
