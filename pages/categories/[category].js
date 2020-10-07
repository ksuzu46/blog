import ContentWrapper from '../../components/ContentWrapper';
import {getAllPosts, getPostsByCategory} from '../../lib/api';
import Bio from "../../components/Bio";
import PostsByCategory from "../../components/PostsByCategory";
import CategoryMenu from "../../components/CategoryMenu";


export default function Category({postsByCategory, category}) {
    return (
        <ContentWrapper>
            <div className="content">
                <div className="main-wrapper">
                    <CategoryMenu/>
                    {postsByCategory.length > 0 ?
                        <PostsByCategory
                            posts={postsByCategory}
                            category={category}/> :
                        <p>no posts for this category</p>}
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
