import Meta from './Meta'

export default function ContentWrapper({ preview, children }) {
  return (
    <div className="content-wrapper">
        {children}
    </div>
  )
}
