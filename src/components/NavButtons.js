import styles from "./NavButtons.module.css";

const NavButtons = () => {

    return (
        <div class={styles.container}>
            <div class={styles.leftButtons}>
                <button className={styles.btnStyle1}>Spaces</button>
                <button className={styles.btnStyle1}>Experience</button>
            </div>
            <div className={styles.rightButtons}>
                <button className={styles.btnStyle2}>Filter</button>
            </div>
        </div>
    );
}

export default NavButtons;