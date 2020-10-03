import PostPreview from "./post-preview";

export default function HeroPost({ title, category, emoji, date, slug })
{
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
            />
        </div>
    )
}
