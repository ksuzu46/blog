import ContentWrapper from "./ContentWrapper";
import { ghUrl, ghUsername } from "../lib/constants"

const Footer = () => {
  return (
    <div className="footer-content">
        <div className="footer-inner">
            <a href={ghUrl} rel="nofollow">
              SourceCode
            </a>
          <div>© { new Date().getFullYear() } { ghUsername }</div>
        </div>
    </div>
  );
};

export default Footer;