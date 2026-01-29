import { notFound } from 'next/navigation'
import PostBody from '@/components/PostBody'
import PostHeader from '@/components/PostHeader'
import ContentWrapper from '@/components/ContentWrapper'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import Bio from '@/components/Bio'
import CategoryMenu from '@/components/CategoryMenu'

export function generateStaticParams() {
  const posts = getAllPosts(['slug'])
  return posts.map((post) => ({ slug: post.slug! }))
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

  return (
    <ContentWrapper>
      <div className="content">
        <div className="main-wrapper">
          <CategoryMenu />
          <div className="blog">
            <PostHeader
              title={post.title!}
              date={post.slug!}
              lang={post.lang!}
            />
            <PostBody content={content} />
          </div>
        </div>
        <Bio />
      </div>
    </ContentWrapper>
  )
}
