import styles from "./NavButtons.module.css";

const NavButtons = () => {
  return (
    <div className={styles.navButtons}>
      <div className={styles.homePageButtonsParent}>
        <div className={styles.homePageButtons}>
          <div className={styles.buttonPlain}>
            <b className={styles.cancel}>SPACES</b>
          </div>
        </div>
        <div className={styles.homePageButtons}>
          <div className={styles.buttonPlain1}>
            <b className={styles.cancel}>EXPERIENCE</b>
          </div>
        </div>
      </div>
      <div className={styles.homePageButtons2}>
        <div className={styles.buttonPlain2}>
          <img
            className={styles.iconlylightOutlinefilter}
            alt=""
            src="../iconlylightoutlinefilter.svg"
          />
          <b className={styles.cancel}>FILTER</b>
        </div>
      </div>
    </div>
  );
};

export default NavButtons;
