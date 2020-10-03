import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Bio from '../components/Bio';
import Meta from '../components/meta';
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
                                    date={heroPost.slug}
                                    slug={heroPost.slug}
                                    category={heroPost.category}
                                    emoji={heroPost.emoji}
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
        'category',
        'emoji'
    ]);

    return {
        props: {allPosts},
    };
}
