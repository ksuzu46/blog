import ContentWrapper from '@/components/ContentWrapper'
import { getAllPosts, getPostsByCategory } from '@/lib/api'
import Bio from '@/components/Bio'
import PostsByCategory from '@/components/PostsByCategory'
import CategoryMenu from '@/components/CategoryMenu'

export function generateStaticParams() {
  const posts = getAllPosts(['category'])
  const categories = [...new Set(posts.map((post) => post.category!))]
  return categories.map((category) => ({ category }))
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
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
  const postsByCategory = getPostsByCategory(category, allPosts)

  return (
    <ContentWrapper>
      <div className="content">
        <div className="main-wrapper">
          <CategoryMenu />
          {postsByCategory.length > 0 ? (
            <PostsByCategory posts={postsByCategory} category={category} />
          ) : (
            <p>no posts for this category</p>
          )}
        </div>
        <Bio />
      </div>
    </ContentWrapper>
  )
}
