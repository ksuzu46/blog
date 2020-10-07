import DateFormatter from './DateFormatter';
import LanguageLabel from "./LanguageLabel";

export default function PostHeader({title, date, lang}) {

    return (
        <>
            <div className="blog-post-heading-wrapper">
                <h3 className="blog-post-heading">{title}</h3>
                <h6 className="blog-post-heading-date">
                    <DateFormatter dateString={date}/>
                </h6>
            </div>
            <LanguageLabel lang={lang}/>
        </>
    );
}
