import "./style.css"

import github from "./../../img/icons/github-svgrepo-com.svg"

const BtnGitHub = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={github} alt="img" className="social__item" />
            Github repo
        </a>
    );
}

export default BtnGitHub;