import Image from 'next/image'
import Link from 'next/link'
import { ghUrl, myEmail } from '@/lib/constants'
import styles from './Bio.module.scss'

const author = 'ksuzu'
const bioText = 'Junior Software Engineer'
const avatarUrl = '/images/gh_avator.png'
const svgEmail = '/images/email.svg'
const svgGitHub = '/images/github.svg'
const svgPortfolio = '/images/portfolio.svg'

export default function Bio() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image className={styles.avatarImage} src={avatarUrl} alt={author} width={80} height={80} />
        <div className={styles.name}>
          <Link href="/">{author}</Link>
        </div>
      </div>
      <div className={styles.main}>
        <p className={styles.text}>{bioText}</p>
        <div className={styles.links}>
          <div className={styles.link}>
            <a href="https://ksuzu.net">
              <Image src={svgPortfolio} alt="PORTFOLIO" width={16} height={16} />
              Website
            </a>
          </div>
          <div className={styles.link}>
            <a href={ghUrl}>
              <Image src={svgGitHub} alt="GitHub" width={16} height={16} />
              GitHub
            </a>
          </div>
          <div className={styles.link}>
            <a className={styles.linkEmail} href={`mailto:${myEmail}`}>
              <Image src={svgEmail} alt="Email" width={16} height={16} />
              E-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
