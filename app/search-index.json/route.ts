import { getAllPosts } from '@/lib/api'

export const dynamic = 'force-static'

export function GET() {
  const posts = getAllPosts(['title', 'slug', 'category', 'emoji', 'lang', 'excerpt'])

  const index = posts.map((post) => ({
    title: post.title,
    slug: post.slug,
    category: post.category,
    emoji: post.emoji,
    lang: post.lang,
    excerpt: post.excerpt,
  }))

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  })
}
