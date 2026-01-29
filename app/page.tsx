import OtherPosts from '@/components/OtherPosts'
import HeroPost from '@/components/HeroPost'
import Bio from '@/components/Bio'
import { getAllPosts } from '@/lib/api'
import ContentWrapper from '@/components/ContentWrapper'
import CategoryMenu from '@/components/CategoryMenu'

export default function Index() {
  const allPosts = getAllPosts([
    'title',
    'subtitle',
    'date',
    'slug',
    'category',
    'emoji',
    'content',
    'lang',
  ])

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <ContentWrapper>
      <div className="content">
        <div className="main-wrapper">
          <CategoryMenu />
          {heroPost && (
            <HeroPost
              title={heroPost.title!}
              slug={heroPost.slug!}
              category={heroPost.category!}
              emoji={heroPost.emoji!}
              lang={heroPost.lang!}
            />
          )}
          {morePosts.length > 0 && <OtherPosts posts={morePosts} />}
        </div>
        <Bio />
      </div>
    </ContentWrapper>
  )
}
