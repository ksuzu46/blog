import Link from "next/link";

const LanguageLabel = ({lang, isLink}) => {
    const labelColor = lang === 'en' ? '#2196F3' : '#FFC107';

    return (
        <Link
            href={`/languages/${lang}`}
            passHref
        >
            <div className="label-wrapper">
                <div className="label-text"
                     style={{
                         background: labelColor
                    }}>
                    {lang.toUpperCase()}
                </div>
            </div>
        </Link>
    );
};

export default LanguageLabel;