import Link from 'next/link';

import {myEmail} from "../lib/constants";

const author = "ksuzu";
const bioText = "A junior software developer looking for a job"
const avatarUrl = '/assets/images/gh_avator.png';
const svgEmail = '/assets/images/email.svg';
const svgGitHub = '/assets/images/github.svg'
const svgResume = '/assets/images/resume.svg';
const svgPortfolio = "/assets/images/portfolio.svg";
const ghLink = "https://github.com/Ks5810";


const Bio = () => {
    return (
        <div className="bio-wrapper">
            <div className="bio-header">
                <img className="avatar-image" src={avatarUrl} alt={author}/>
                <div className="bio-name">
                    <Link href='/'>{author}
                    </Link>
                </div>
            </div>
            <div className="bio-main">
                <p className="bio-text">
                    {bioText}
                </p>
                <div className="bio-links">
                    <div className="bio-link">
                        <a href="https://ksuzu.net">
                            <img src={svgPortfolio} alt="PORTFOLIO"/>
                            {`Website`}
                        </a>
                    </div>
                    <div className="bio-link">
                        <a href={ghLink}>
                            <img src={svgGitHub} alt="GitHub"/>
                            {`GitHub`}
                        </a>
                    </div>
                    <div className="bio-link">
                        <a className="bio-link--email" href={`mailto:${myEmail}`}>
                            <img src={svgEmail} alt="Email"/>
                            {`E-mail`}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bio;