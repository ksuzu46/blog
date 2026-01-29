import ContentWrapper from '@/components/ContentWrapper'
import { getAllPosts, getPostsByLanguage } from '@/lib/api'
import Bio from '@/components/Bio'
import PostsByLanguage from '@/components/PostsByLanguage'
import CategoryMenu from '@/components/CategoryMenu'

export function generateStaticParams() {
  const posts = getAllPosts(['lang'])
  const langs = [...new Set(posts.map((post) => post.lang!))]
  return langs.map((lang) => ({ lang }))
}

export default async function LanguagePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const allPosts = getAllPosts([
    'title',
    'subtitle',
    'date',
    'slug',
    'category',
    'emoji',
    'lang',
    'content',
  ])
  const postsByLanguage = getPostsByLanguage(lang, allPosts)

  return (
    <ContentWrapper>
      <div className="content">
        <div className="main-wrapper">
          <CategoryMenu />
          {postsByLanguage.length > 0 ? (
            <PostsByLanguage posts={postsByLanguage} />
          ) : (
            <p>no posts for this language</p>
          )}
        </div>
        <Bio />
      </div>
    </ContentWrapper>
  )
}
