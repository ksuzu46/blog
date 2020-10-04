import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '../../components/PostBody';
import Header from '../../components/Header';
import PostHeader from '../../components/PostHeader';
import ContentWrapper from '../../components/ContentWrapper';
import {getAllPosts, getPostBySlug, getPostsByCategory} from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Footer from "../../components/Footer";
import Bio from "../../components/Bio";
import PostPreview from "../../components/PostPreview";
import HeroPost from "../../components/HeroPost";
import OtherPosts from "../../components/OtherPosts";
import PostsByCategory from "../../components/PostsByCategory";
import CategoryMenu from "../../components/CategoryMenu";

export default function Category({ postsByCategory, category }) {
    const router = useRouter();

    return (
        <>
            <Header/>
            <ContentWrapper>
                <div className="content">
                    <div className="main-wrapper">
                        <CategoryMenu/>
                        { postsByCategory.length > 0 ?
                            <PostsByCategory
                                posts={postsByCategory}
                                category={category}/>:
                            <p>no posts for this category</p>}
                    </div>
                    <Bio/>
                </div>
            </ContentWrapper>
            <Footer/>
        </>
    );
}

// getStaticProps() fetches data at build time
// use getServerSideProps() when SSR is needed
export async function getStaticProps({params}) {
    const allPosts = getAllPosts([
        'title',
        'subtitle',
        'date',
        'slug',
        'category',
        'emoji',
        'content'
    ]);

    const postsByCategory = getPostsByCategory(params.category, allPosts);

    return {
        props: {
            category: params.category,
            postsByCategory
        },
    }
}

// getStaticPath()
export async function getStaticPaths() {
    const posts = getAllPosts(['category']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    category: post.category,
                },
            };
        }),
        fallback: false,
    };
}
