import { getImageUrl } from "../../utils"
import styles from "../About/About.module.css"

export const About = () => {
    return (
    <section className={styles.container} id="About">
        {/* <h2 className={styles.title}>About</h2> */}
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl('about/aboutImage.png')} alt="This is about image" />
        </div>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/serverIcon.png')} alt="Server image" />
                <div className={styles.aboutItemText}>
                    <h3>Back End</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor image" />
                <div className={styles.aboutItemText}>
                    <h3>Front End</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pers</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/uiIcon.png')} alt="UI image" />
                <div className={styles.aboutItemText}>
                    <h3>UI</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Srep</p>
                </div>
            </li>
        </ul>
    </section>
    );
}