import Alert from '../components/alert'
import Meta from '../components/meta'

export default function ContentWrapper({ preview, children }) {
  return (
    <div className="content-wrapper">
        {children}
    </div>
  )
}
