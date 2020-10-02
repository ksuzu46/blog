import PostPreview from "./post-preview";

export default function HeroPost({
                                     title,
                                     coverImage,
                                     date,
                                     excerpt,
                                     author,
                                     slug,
                                 }) {
    return (
        <>
            <h1>Most Recent</h1>
            <PostPreview
                key={slug}
                title={title}
                coverImage={coverImage}
                date={slug}
                author={author}
                slug={slug}
                excerpt={excerpt}
            />     </>
    )
}
