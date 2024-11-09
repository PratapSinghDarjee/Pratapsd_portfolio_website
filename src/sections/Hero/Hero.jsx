import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

import CV from '../../assets/final-cv.pdf';
import { useTheme } from '../../common/ThemeContext';

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
                src={heroImg} 
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
                SD Pratap
            </h1>
            <h2>
                IT Technical Specialist
            </h2>
            <span>
                <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://Linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
                <a href="https://Youtube.com/" target="_blank">
                    <img src={youtubeIcon} alt="Youtube icon" />
                </a>

            </span>
            <p className={styles.description}>
            I have 6+ years of experience in data/network operations, security  and access systems, telecommunications engineering, and electronic project development.
            </p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>          
            </a>
        </div>
    </section>
  );
  
}

export default Hero; 