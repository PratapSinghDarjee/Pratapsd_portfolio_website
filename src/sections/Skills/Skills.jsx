import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML/CSS/JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="C/C++" />
        <SkillList src={checkMarkIcon} skill="Android App development" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Packet Tracer" />
        <SkillList src={checkMarkIcon} skill="Switches/Router/AP/Modem" />
        <SkillList src={checkMarkIcon} skill="Window Servers/Linux server" />
        <SkillList src={checkMarkIcon} skill="FIber/ Ethernet Networking" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Survellience system" />
        <SkillList src={checkMarkIcon} skill="VLPR/ANPR system" />
        <SkillList src={checkMarkIcon} skill="Access Control System" />
        <SkillList src={checkMarkIcon} skill="Power System" />
        <SkillList src={checkMarkIcon} skill="DBMS" />
      </div>
    </section>
  );
}

export default Skills;