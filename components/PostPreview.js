import Link from 'next/link';
import twemoji from "twemoji";
import DateFormatter from './DateFormatter';

const MyLink = React.forwardRef(({onClick, href, emoji, title, date}, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} className="post-card-link">
            <div className="post-card-emoji"
                 dangerouslySetInnerHTML={{__html: emoji}}/>
            <div className="post-card-content">
                <h3>{title}</h3>
                <DateFormatter dateString={date}/>
            </div>
        </a>
    )
})

export default function PostPreview({title, date, category, emoji, slug}) {
    const parsedEmoji = twemoji.parse(emoji || "🐱", {
        folder: "svg",
        ext: ".svg"
    });

    return (
        <div className="post-card-wrapper">
            <Link
                href={`/${encodeURIComponent(slug)}`}
                passHref
            >
                <MyLink emoji={parsedEmoji} title={title} date={date}/>
            </Link>
        </div>
    );
}
