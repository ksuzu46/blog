import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import ContentWrapper from '../../components/ContentWrapper';
import {getAllPosts, getPostBySlug} from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Bio from "../../components/Bio";


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
                        {router.isFallback ? (
                            `Loading…`
                        ) : (
                            <div className="blog">
                                <PostHeader
                                    title={post.title}
                                    date={post.slug}
                                    slug={post.slug}
                                />
                                <PostBody content={post.content}/>
                            </div>
                        )}
                    </div>
                    <Bio/>
                </div>
            </ContentWrapper>
        </>
    );
}

export async function getStaticProps({params}) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
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
