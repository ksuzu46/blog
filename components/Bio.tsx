import Link from 'next/link'
import { myEmail } from '@/lib/constants'
import styles from './Bio.module.scss'

const author = 'ksuzu'
const bioText = 'Junior Software Engineer'
const avatarUrl = '/images/gh_avator.png'
const svgEmail = '/images/email.svg'
const svgGitHub = '/images/github.svg'
const svgPortfolio = '/images/portfolio.svg'
const ghLink = 'https://github.com/ksuzu46'

export default function Bio() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img className={styles.avatarImage} src={avatarUrl} alt={author} />
        <div className={styles.name}>
          <Link href="/">{author}</Link>
        </div>
      </div>
      <div className={styles.main}>
        <p className={styles.text}>{bioText}</p>
        <div className={styles.links}>
          <div className={styles.link}>
            <a href="https://ksuzu.net">
              <img src={svgPortfolio} alt="PORTFOLIO" />
              Website
            </a>
          </div>
          <div className={styles.link}>
            <a href={ghLink}>
              <img src={svgGitHub} alt="GitHub" />
              GitHub
            </a>
          </div>
          <div className={styles.link}>
            <a className={styles.linkEmail} href={`mailto:${myEmail}`}>
              <img src={svgEmail} alt="Email" />
              E-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
