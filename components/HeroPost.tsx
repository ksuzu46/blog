import PostPreview from './PostPreview'

interface HeroPostProps {
  title: string
  category: string
  emoji: string
  slug: string
  lang: string
}

export default function HeroPost({ title, category, emoji, slug, lang }: HeroPostProps) {
  return (
    <div className="hero-post">
      <h1>Most Recent</h1>
      <PostPreview
        key={slug}
        title={title}
        date={slug}
        category={category}
        emoji={emoji}
        slug={slug}
        lang={lang}
      />
    </div>
  )
}
