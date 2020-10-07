import ContentWrapper from '../../components/ContentWrapper';
import {getAllPosts, getPostsByLanguage} from '../../lib/api';
import Bio from "../../components/Bio";
import PostsByCategory from "../../components/PostsByCategory";
import CategoryMenu from "../../components/CategoryMenu";
import PostsByLanguage from "../../components/PostsByLanguage";


export default function Lang({postsByLanguage, lang}) {
    return (
        <ContentWrapper>
            <div className="content">
                <div className="main-wrapper">
                    <CategoryMenu/>
                    {postsByLanguage.length > 0 ?
                        <PostsByLanguage
                            posts={postsByLanguage}
                            lang={lang}/> :
                        <p>no posts for this language</p>}
                </div>
                <Bio/>
            </div>
        </ContentWrapper>
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
        'lang',
        'content'
    ]);

    const postsByLanguage = getPostsByLanguage(params.lang, allPosts);

    return {
        props: {
            lang: params.lang,
            postsByLanguage
        },
    }
}

// getStaticPath()
export async function getStaticPaths() {
    const posts = getAllPosts(['lang']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    lang: post.lang,
                },
            };
        }),
        fallback: false,
    };
}
