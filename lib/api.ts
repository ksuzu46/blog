import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Post } from '@/types/post'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(
  slug: string,
  fields: (keyof Post)[] = []
): Partial<Post> {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const items: Partial<Post> = {}

  fields.forEach((field) => {
    if (field === 'slug' || field === 'date') {
      // slug doubles as date (filenames are ISO dates like 2020-02-02)
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field] !== undefined) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: (keyof Post)[] = []): Partial<Post>[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1))
  return posts
}

export function getPostsByCategory(
  category: string,
  posts: Partial<Post>[]
): Partial<Post>[] {
  return posts.filter((post) => post.category === category)
}

export function getPostsByLanguage(
  lang: string,
  posts: Partial<Post>[]
): Partial<Post>[] {
  return posts.filter((post) => post.lang === lang)
}
