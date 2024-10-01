import { getImageUrl } from "../../utils"
import styles from "./Me.module.css";

export const Me = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Samuel</h1>
                <p className={styles.description}>I'm a software Engineer with some experience in java, php, react, laravel</p>
                <a className={styles.contactBtn} href="mailto:samesg04@gmail.com">Contact Me</a>
            </div>
            <img className={styles.myImage} src={getImageUrl("me/myImage.png")} alt="My Image" />
            <div className={styles.topBlur}></div>
            <div className={styles.botBlur}></div>
        </section>
    )
    
}