'use client'

import { useEffect } from 'react'
import styles from './CodeCopyButton.module.scss'

export default function CodeCopyButton() {
  useEffect(() => {
    const blocks = document.querySelectorAll('pre > code')
    blocks.forEach((block) => {
      const pre = block.parentElement
      if (!pre || pre.querySelector(`.${styles.button}`)) return

      pre.style.position = 'relative'
      const btn = document.createElement('button')
      btn.className = styles.button
      btn.textContent = 'Copy'
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(block.textContent || '')
          btn.textContent = 'Copied!'
        } catch {
          btn.textContent = 'Failed'
        }
        setTimeout(() => {
          btn.textContent = 'Copy'
        }, 2000)
      })
      pre.appendChild(btn)
    })
  }, [])

  return null
}
