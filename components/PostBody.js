import parse from 'html-react-parser';

export default function PostBody({content}) {
    return (
        <div className="markdown-body-custom">{parse(content)}</div>
    );
}
