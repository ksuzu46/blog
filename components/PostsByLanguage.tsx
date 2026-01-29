import { Post } from '@/types/post'
import PostPreview from './PostPreview'

interface PostsByLanguageProps {
  posts: Partial<Post>[]
}

export default function PostsByLanguage({ posts }: PostsByLanguageProps) {
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
