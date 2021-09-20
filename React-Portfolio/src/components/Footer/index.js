import React from 'react';
import {MarkGithubIcon, InfoIcon, MailIcon} from '@primer/octicons-react';


const Footer = () => {
    return (
        <footer>
            <a className='mx-2' href='https://github.com/JazmyneB'><MarkGithubIcon size={55} /></a>
            <a className='mx-2' href='https://www.linkedin.com/in/jazmynebradley/'><InfoIcon size={55} /></a>
            <a className='mx-2' href='mailto:bradleyj1@email.arizona.edu'><MailIcon size={55} /></a>
        </footer>

    )
}

export default Footer;