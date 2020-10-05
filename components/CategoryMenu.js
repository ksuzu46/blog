import Link from "next/link";
import {useRouter} from "next/router";
import svgSchool from "../public/assets/images/school.svg";
import svgAlgo from "../public/assets/images/algorithm.svg";
import svgAll from "../public/assets/images/all.svg";
import svgDev from "../public/assets/images/dev.svg";


const MyLink = React.forwardRef(({onClick, href, catIcon, catName}, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref}>
                <div className="cat-item__image">
                    <div className="cat-item__image-wrapper">
                    <img src={catIcon} alt={catName}/>
                </div>
            </div>
            <div className="cat-item__name">{catName}</div>
        </a>
    )
})

const CategoryLink = ({catName, catIcon, catLink, path}) => {
    return (
        <div
            className={`category-item ${catLink === path && "active"}`}>
            <Link href={catLink} className="cat-item__link" passHref>
                <MyLink catIcon={catIcon} catName={catName}/>
            </Link>
        </div>
    );
};

const CategoryMenu = () => {
    const router = useRouter();
    const path = router.asPath;

    return (
        <nav className="nav">
            <ul className="category-item-list">
                <CategoryLink catName="All" catIcon={svgAll} catLink="/"
                              path={path}/>
                <CategoryLink
                    catName="Dev"
                    catIcon={svgDev}
                    catLink="/categories/dev"
                    path={path}
                />
                <CategoryLink
                    catName="Algorithm"
                    catIcon={svgAlgo}
                    catLink="/categories/algorithm"
                    path={path}
                />
                <CategoryLink
                    catName="School"
                    catIcon={svgSchool}
                    catLink="/categories/school"
                    path={path}
                />
            </ul>
        </nav>
    );
};

export default CategoryMenu;