import Link from 'next/link'
import ContentWrapper from './ContentWrapper'

export default function Header() {
    return (
        <header className="header-tag">
            <ContentWrapper>
                <div className="header-inner">
                    <h1>
                        <Link href="/">{`ksuzu's blog`}</Link>
                    </h1>
                </div>
            </ContentWrapper>
        </header>
    )
}
