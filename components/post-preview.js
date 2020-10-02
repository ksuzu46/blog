import Link from 'next/link';
import DateFormatter from './date-formatter';

export default function PostPreview({
                                        title,
                                        coverImage,
                                        date,
                                        excerpt,
                                        author,
                                        slug,
                                    }) {
    return (
        <div className="post-card-wrapper">
            <div className="post-card-link">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <div className="post-card-content">
                        <h3>{title}</h3>
                        <DateFormatter dateString={date}/>
                    </div>
                </Link>
            </div>
        </div>
    );
}
