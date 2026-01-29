import Link from 'next/link'
import { myEmail } from '@/lib/constants'

const author = 'ksuzu'
const bioText = 'Junior Software Engineer'
const avatarUrl = '/images/gh_avator.png'
const svgEmail = '/images/email.svg'
const svgGitHub = '/images/github.svg'
const svgPortfolio = '/images/portfolio.svg'
const ghLink = 'https://github.com/ksuzu46'

export default function Bio() {
  return (
    <div className="bio-wrapper">
      <div className="bio-header">
        <img className="avatar-image" src={avatarUrl} alt={author} />
        <div className="bio-name">
          <Link href="/">{author}</Link>
        </div>
      </div>
      <div className="bio-main">
        <p className="bio-text">{bioText}</p>
        <div className="bio-links">
          <div className="bio-link">
            <a href="https://ksuzu.net">
              <img src={svgPortfolio} alt="PORTFOLIO" />
              Website
            </a>
          </div>
          <div className="bio-link">
            <a href={ghLink}>
              <img src={svgGitHub} alt="GitHub" />
              GitHub
            </a>
          </div>
          <div className="bio-link">
            <a className="bio-link--email" href={`mailto:${myEmail}`}>
              <img src={svgEmail} alt="Email" />
              E-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
