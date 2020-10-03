import PostPreview from '../components/post-preview'

export default function MoreStories({posts}) {
    return (
        <>
            <h1> Other Posts </h1>
            <div>
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        category={post.category}
                        emoji={post.emoji}
                        date={post.slug}
                        slug={post.slug}
                    />
                ))}
            </div>
        </>
    );
}
