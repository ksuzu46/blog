import PostPreview from '@/components/PostPreview'
import PostList from '@/components/PostList'
import Bio from '@/components/Bio'
import { getAllPosts } from '@/lib/api'
import ContentWrapper from '@/components/ContentWrapper'
import CategoryMenu from '@/components/CategoryMenu'

export default function Index() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'category',
    'emoji',
    'lang',
    'excerpt',
  ])

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <ContentWrapper>
      <div className="content">
        <div className="main-wrapper">
          <CategoryMenu />
          {heroPost && (
            <div className="hero-post">
              <h1>Most Recent</h1>
              <PostPreview
                title={heroPost.title!}
                emoji={heroPost.emoji!}
                date={heroPost.date!}
                slug={heroPost.slug!}
                lang={heroPost.lang!}
                excerpt={heroPost.excerpt}
              />
            </div>
          )}
          {morePosts.length > 0 && <PostList posts={morePosts} heading="Other Posts" />}
        </div>
        <Bio />
      </div>
    </ContentWrapper>
  )
}
