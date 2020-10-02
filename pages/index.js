import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Bio from '../components/Bio';
import {getAllPosts} from '../lib/api';
import Header from "../components/header";
import ContentWrapper from "../components/ContentWrapper";

export default function Index({allPosts}) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
        <>
            <Header />
            <ContentWrapper>
                <div className="content">
                    <div className="main-wrapper">
                        {
                            heroPost && (
                                <HeroPost
                                    title={heroPost.title}
                                    coverImage={heroPost.coverImage}
                                    date={heroPost.slug}
                                    author={heroPost.author}
                                    slug={heroPost.slug}
                                    excerpt={heroPost.excerpt}
                                />
                            )}
                        {morePosts.length > 0 &&
                        <MoreStories posts={morePosts}/>}
                    </div>
                    <Bio/>
                </div>
            </ContentWrapper>
        </>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'subtitle',
        'layout',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ]);

    return {
        props: {allPosts},
    };
}
