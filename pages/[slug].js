import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '../components/PostBody';
import Header from '../components/Header';
import PostHeader from '../components/PostHeader';
import ContentWrapper from '../components/ContentWrapper';
import {getAllPosts, getPostBySlug} from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import Footer from "../components/Footer";
import Bio from "../components/Bio";
import CategoryMenu from "../components/CategoryMenu";


export default function Post({post, morePosts, preview}) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>;
    }
    return (
        <>
            <Header/>
            <ContentWrapper>
                <div className="content">
                    <div className="main-wrapper">
                        <CategoryMenu/>
                        {router.isFallback ? (
                            `Loading…`
                        ) : (
                            <div className="blog">
                                <PostHeader
                                    title={post.title}
                                    date={post.slug}
                                    slug={post.slug}
                                    category={post.category}
                                    emojo={post.emoji}
                                />
                                <PostBody content={post.content}/>
                            </div>
                        )}
                    </div>
                    <Bio/>
                </div>
            </ContentWrapper>
            <Footer />
        </>
    );
}

// getStaticProps() fetches data at build time
// use getServerSideProps() when SSR is needed
export async function getStaticProps({params}) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'category',
        'emoji',
        'content',
    ]);

    const content = await markdownToHtml(post.content || '');
    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

// getStaticPath()
export async function getStaticPaths() {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
