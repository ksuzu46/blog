import Link from 'next/link'
import { useRouter } from 'next/router'

const svgSchool = '/images/school.svg'
const svgAlgo = '/images/algorithm.svg'
const svgAll = '/images/all.svg'
const svgDev = '/images/dev.svg'

interface CategoryLinkProps {
  catName: string
  catIcon: string
  catLink: string
  path: string
}

function CategoryLink({ catName, catIcon, catLink, path }: CategoryLinkProps) {
  return (
    <div className={`category-item ${catLink === path ? 'active' : ''}`}>
      <Link href={catLink} className="cat-item__link">
        <div className="cat-item__image">
          <img src={catIcon} alt={catName} />
        </div>
        <div className="cat-item__name">{catName}</div>
      </Link>
    </div>
  )
}

export default function CategoryMenu() {
  const router = useRouter()
  const path = router.asPath

  return (
    <nav className="nav">
      <ul className="category-item-list">
        <CategoryLink catName="All" catIcon={svgAll} catLink="/" path={path} />
        <CategoryLink catName="Dev" catIcon={svgDev} catLink="/categories/dev" path={path} />
        <CategoryLink catName="Algorithm" catIcon={svgAlgo} catLink="/categories/algorithm" path={path} />
        <CategoryLink catName="School" catIcon={svgSchool} catLink="/categories/school" path={path} />
      </ul>
    </nav>
  )
}
