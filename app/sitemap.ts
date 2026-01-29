import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/api'
import { siteUrl } from '@/lib/constants'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts(['slug', 'date'])

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/${post.slug}`,
    lastModified: post.date,
  }))

  return [
    {
      url: siteUrl,
      lastModified: posts[0]?.date,
    },
    ...postEntries,
  ]
}
