import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PostBody from '@/components/PostBody'
import PostHeader from '@/components/PostHeader'
import ContentWrapper from '@/components/ContentWrapper'
import { getAllPosts, getPostBySlug, getAdjacentPosts } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import { getReadingTime } from '@/lib/readingTime'
import Bio from '@/components/Bio'
import CategoryMenu from '@/components/CategoryMenu'
import TableOfContents from '@/components/TableOfContents'
import PostNavigation from '@/components/PostNavigation'
import { siteUrl, ghUsername } from '@/lib/constants'

export function generateStaticParams() {
  const posts = getAllPosts(['slug'])
  return posts.map((post) => ({ slug: post.slug! }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug, ['title', 'date', 'category', 'emoji'])
  if (!post.slug) return {}
  const title = post.title!
  return {
    title,
    description: `${post.emoji} ${title} — ${post.category}`,
    openGraph: {
      type: 'article',
      title,
      url: `${siteUrl}/${slug}`,
      publishedTime: post.date,
      authors: [ghUsername],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'category',
    'emoji',
    'lang',
    'content',
  ])

  if (!post.slug) {
    notFound()
  }

  const content = await markdownToHtml(post.content || '')
  const readingTime = getReadingTime(content)
  const { prev, next } = getAdjacentPosts(slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: ghUsername,
      url: siteUrl,
    },
    url: `${siteUrl}/${slug}`,
  }

  return (
    <ContentWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="content">
        <div className="main-wrapper">
          <CategoryMenu />
          <div className="blog">
            <PostHeader
              title={post.title!}
              date={post.date!}
              lang={post.lang!}
              readingTime={readingTime}
            />
            <TableOfContents />
            <PostBody content={content} />
            <PostNavigation prev={prev} next={next} />
          </div>
        </div>
        <Bio />
      </div>
    </ContentWrapper>
  )
}
