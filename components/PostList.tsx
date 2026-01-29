import { Post } from '@/types/post'
import PostPreview from './PostPreview'

interface PostListProps {
  posts: Partial<Post>[]
  heading?: string
}

export default function PostList({ posts, heading }: PostListProps) {
  return (
    <>
      {heading && <h1>{heading}</h1>}
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title!}
            emoji={post.emoji!}
            date={post.date!}
            slug={post.slug!}
            lang={post.lang!}
          />
        ))}
      </div>
    </>
  )
}
