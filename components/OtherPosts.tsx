import { Post } from '@/types/post'
import PostPreview from './PostPreview'

interface OtherPostsProps {
  posts: Partial<Post>[]
}

export default function OtherPosts({ posts }: OtherPostsProps) {
  return (
    <>
      <h1> Other Posts </h1>
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title!}
            category={post.category!}
            emoji={post.emoji!}
            date={post.slug!}
            slug={post.slug!}
            lang={post.lang!}
          />
        ))}
      </div>
    </>
  )
}
