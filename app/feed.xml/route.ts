import { Feed } from 'feed'
import { getAllPosts } from '@/lib/api'
import { siteUrl, siteTitle, siteDescription, ghUsername, myEmail } from '@/lib/constants'

export const dynamic = 'force-static'

export function GET() {
  const posts = getAllPosts(['title', 'date', 'slug', 'category', 'emoji'])

  const feed = new Feed({
    title: siteTitle,
    description: siteDescription,
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    copyright: `All rights reserved ${new Date().getFullYear()}, ${ghUsername}`,
    author: {
      name: ghUsername,
      email: myEmail,
      link: siteUrl,
    },
  })

  posts.forEach((post) => {
    feed.addItem({
      title: `${post.emoji} ${post.title}`,
      id: `${siteUrl}/${post.slug}`,
      link: `${siteUrl}/${post.slug}`,
      date: new Date(post.date!),
      category: [{ name: post.category! }],
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
