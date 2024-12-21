import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import pratapImg from '../../assets/Pratap_img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/final-cv.pdf';
import cert from '../../assets/Certificates.pdf';
import train from '../../assets/Trainings.pdf';

import { useTheme } from '../../common/ThemeContext';
import { createElement } from 'react';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme ==='light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
   
  return (

    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero}
                src={pratapImg} 
                alt="Profile picture of Pratap Singh Darjee" 
            />
            <img 
                className={styles.colorMode}
                src={themeIcon} 
                alt="Color mode icon" 
                onClick ={toggleTheme}
            />
        </div>
        <div className={styles.info}> 
            <h1>
                Pratap Singh Darjee
            </h1>
            <h2>
                IT Technical Specialist
            </h2>
            <span>
                <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com/PratapSinghDarjee" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://Linkedin.com/in/pratapsd/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
            I have led the Safe City project in Bhutan for 6 years. This project includes a server-based
            Security Surveillance System, a Vehicle License Plate Recognition system, and an Alarm 
            Management System. I was responsible for creating the engineering drawings, IP plan, setup,
            configuration, and implementation of these systems at various sites. Additionally, I maintained
            the network switches, servers, decoders, storage units, databases, applications, and backup
            power systems. The fiber networking for the project was carried out through the fiber 
            infrastructure of Bhutan Telecom Limited (BTL) and the Department of Information Technology
            and Telecom (DITT), and I worked with them to maintain the network. There was a support
            agreement for software and hardware updates with RAD, Bynet Software Solutions, and HTS International,
            and I closely collaborated with them on this. These companies are based in Israel and have
            projects throughout the USA and Canada.
            </p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>          
            </a>
            <a href={cert} download>
                <button className="hover">
                    Certificates
                </button>          
            </a>
            <a href={train} download>
                <button className="hover">
                    Trainings
                </button>          
            </a>
        </div>
    </section>
  );
  
}

export default Hero; 