import parse from 'html-react-parser'

interface PostBodyProps {
  content: string
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="blog-post-body-wrapper">
      <div className="markdown-body-custom">{parse(content)}</div>
    </div>
  )
}
