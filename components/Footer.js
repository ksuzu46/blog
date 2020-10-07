import ContentWrapper from "./ContentWrapper";
import {ghUrl, ghUsername} from "../lib/constants"

const Footer = () => {
    return (
        <div className="footer-content">
            <div className="footer-inner">
                <a href={`${ghUrl}/blog`} rel="nofollow">
                    SourceCode
                </a>
                <div>© 2020 {ghUsername}</div>
            </div>
        </div>
    );
};

export default Footer;