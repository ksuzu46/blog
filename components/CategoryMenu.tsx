'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './CategoryMenu.module.scss'

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
    <div className={`${styles.item} ${catLink === path ? styles.active : ''}`}>
      <Link href={catLink} className={styles.link}>
        <div className={styles.image}>
          <Image src={catIcon} alt={catName} width={24} height={24} />
        </div>
        <div className={styles.catName}>{catName}</div>
      </Link>
    </div>
  )
}

export default function CategoryMenu() {
  const path = usePathname()

  return (
    <nav className={styles.nav}>
      <ul className={styles.itemList}>
        <CategoryLink catName="All" catIcon={svgAll} catLink="/" path={path} />
        <CategoryLink catName="Dev" catIcon={svgDev} catLink="/categories/dev" path={path} />
        <CategoryLink catName="Algorithm" catIcon={svgAlgo} catLink="/categories/algorithm" path={path} />
        <CategoryLink catName="School" catIcon={svgSchool} catLink="/categories/school" path={path} />
      </ul>
    </nav>
  )
}
