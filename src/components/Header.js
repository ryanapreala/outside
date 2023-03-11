import styles from "./Header.module.css"
import NavigationBar from "./NavigationBar";
import { DropdownButton } from "react-bootstrap"
const Header = () => {
  return (
    <div className={styles.headerArrangement}>
        <div className={styles.headerStyle}>
            <h1 className={styles.brandOutside}>outside</h1>
            <NavigationBar />
        </div>
    </div>
    
    );
}
export default Header;