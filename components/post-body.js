import parse from 'html-react-parser';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="blog-post-body">
        <div className="markdown-body-custom">{parse(content)}</div>
      </div>
    </div>
  );
}
