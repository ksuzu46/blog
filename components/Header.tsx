import Link from 'next/link'
import ContentWrapper from './ContentWrapper'
import Search from './Search'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <ContentWrapper>
        <div className={styles.inner}>
          <h1>
            <Link href="/">{`ksuzu's blog`}</Link>
          </h1>
          <Search />
        </div>
      </ContentWrapper>
    </header>
  )
}
