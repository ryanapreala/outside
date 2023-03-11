import styles from "./Hero.module.css";
const Hero = () => {

    return(
        <div className={styles.hero}>
            <img className={styles.image}src={require("../images/home_bungalows 1.png")} alt="hero" />
            <div className={styles.overlay}></div>
            <div className={styles.text}>Let's explore Rwanda</div>
        </div>
    );
}
export default Hero;