import styles from "./NavigationBar.module.css"

const NavigationBar = () => {

    return(
        <div className={styles.navigationOval}>
            <button className={styles.searchButton}>Search</button>
        </div>
    );
}

export default NavigationBar