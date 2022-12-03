import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const { category, lang } = data
    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach(field => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'date') {
            items[field] = realSlug
        }
        if (field === 'category') {
            items[field] = category
        }
        if (field === 'lang') {
            items[field] = lang
        }
        if (field === 'content') {
            console.log(content)
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map(slug => getPostBySlug(slug, fields))
        // sort categories by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
    return posts
}

export const getPostsByCategory = (category, posts) => {
    return posts.filter(post => post.category === category)
}

export const getPostsByLanguage = (lang, posts) => {
    return posts.filter(post => post.lang === lang)
}
