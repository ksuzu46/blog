import type { Metadata } from 'next'
import ContentWrapper from '@/components/ContentWrapper'
import { getAllPosts, getPostsByCategory } from '@/lib/api'
import Bio from '@/components/Bio'
import PostList from '@/components/PostList'
import CategoryMenu from '@/components/CategoryMenu'

export function generateStaticParams() {
  const posts = getAllPosts(['category'])
  const categories = [...new Set(posts.map((post) => post.category!))]
  return categories.map((category) => ({ category }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  return {
    title: `${category} posts`,
    description: `Blog posts in the ${category} category`,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'category',
    'emoji',
    'lang',
    'excerpt',
    'readingTime',
  ])
  const postsByCategory = getPostsByCategory(category, allPosts)

  return (
    <ContentWrapper>
      <div className="content">
        <div className="main-wrapper">
          <CategoryMenu />
          {postsByCategory.length > 0 ? (
            <PostList posts={postsByCategory} />
          ) : (
            <p>no posts for this category</p>
          )}
        </div>
        <Bio />
      </div>
    </ContentWrapper>
  )
}
