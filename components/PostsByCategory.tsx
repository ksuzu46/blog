import { Post } from '@/types/post'
import PostPreview from './PostPreview'

interface PostsByCategoryProps {
  posts: Partial<Post>[]
  category: string
}

export default function PostsByCategory({ posts }: PostsByCategoryProps) {
  return (
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
  )
}
