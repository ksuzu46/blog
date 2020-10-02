import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <>
     <h1>Other Posts </h1>
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.slug}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </>
  );
}
