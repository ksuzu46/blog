import type { Metadata } from 'next'
import ContentWrapper from '@/components/ContentWrapper'
import { getAllPosts, getPostsByLanguage } from '@/lib/api'
import Bio from '@/components/Bio'
import PostList from '@/components/PostList'
import CategoryMenu from '@/components/CategoryMenu'

export function generateStaticParams() {
  const posts = getAllPosts(['lang'])
  const langs = [...new Set(posts.map((post) => post.lang!))]
  return langs.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: `${lang} posts`,
    description: `Blog posts written in ${lang}`,
  }
}

export default async function LanguagePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'category',
    'emoji',
    'lang',
    'excerpt',
  ])
  const postsByLanguage = getPostsByLanguage(lang, allPosts)

  return (
    <ContentWrapper>
      <div className="content">
        <div className="main-wrapper">
          <CategoryMenu />
          {postsByLanguage.length > 0 ? (
            <PostList posts={postsByLanguage} />
          ) : (
            <p>no posts for this language</p>
          )}
        </div>
        <Bio />
      </div>
    </ContentWrapper>
  )
}
