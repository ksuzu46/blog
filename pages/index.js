import OtherPosts from '../components/OtherPosts';
import HeroPost from '../components/HeroPost';
import Bio from '../components/Bio';
import {getAllPosts} from '../lib/api';
import ContentWrapper from "../components/ContentWrapper";
import CategoryMenu from "../components/CategoryMenu";

export default function Index({allPosts}) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
        <ContentWrapper>
            <div className="content">
                <div className="main-wrapper">
                    <CategoryMenu/>
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
                    <OtherPosts posts={morePosts}/>}
                </div>
                <Bio/>
            </div>
        </ContentWrapper>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'subtitle',
        'date',
        'slug',
        'category',
        'emoji',
        'content'
    ]);

    return {
        props: {allPosts},
    };
}
