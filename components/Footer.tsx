import { ghUrl, ghUsername } from '@/lib/constants'

export default function Footer() {
  return (
    <div className="footer-content">
      <div className="footer-inner">
        <a href={`${ghUrl}/blog`} rel="nofollow">
          SourceCode
        </a>
        <div>&copy; 2020 {ghUsername}</div>
      </div>
    </div>
  )
}
