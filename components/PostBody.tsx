import parse from 'html-react-parser'
import CodeCopyButton from './CodeCopyButton'

interface PostBodyProps {
  content: string
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="blog-post-body-wrapper">
      <div className="markdown-body-custom">{parse(content)}</div>
      <CodeCopyButton />
    </div>
  )
}
