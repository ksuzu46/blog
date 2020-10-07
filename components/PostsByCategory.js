import PostPreview from './PostPreview'

export default function PostsByCategory({posts, category}) {
    return (
        <div>
            {posts.map((post) => (
                <PostPreview
                    key={post.slug}
                    title={post.title}
                    category={post.category}
                    emoji={post.emoji}
                    date={post.slug}
                    slug={post.slug}
                    lang={post.lang}
                />
            ))}
        </div>
    );
}
