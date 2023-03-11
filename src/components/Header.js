import styles from "./Header.module.css"
import NavigationBar from "./NavigationBar";
const Header = () => {
  return (
    <div className={styles.headerStyle}>
      <h1 className={styles.brandOutside}>outside</h1>
      <NavigationBar />
    </div>
  );
}
export default Header;