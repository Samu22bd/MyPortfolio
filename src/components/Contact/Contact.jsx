import { getImageUrl } from "../../utils";
import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <footer className={styles.container} id="Contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Reach out to me?</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                    <a href="mailto:samesg04@gmail.com">samesg04@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/samuel-budiman">linkedin.com/samuel</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="Email Icon" />
                    <a href="https://github.com/Samu22bd">github.com/samuel</a>
                </li>
            </ul>
        </footer>
    );
}