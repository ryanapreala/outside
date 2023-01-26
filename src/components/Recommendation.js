import styles from "./Recommendation.module.css";

const Recommendation = () => {
  return (
    <div className={styles.booking}>
      <div className={styles.maskGroupParent}>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="../mask-group1@2x.png"
        />
        <div className={styles.akageraNationalParkParent}>
          <div className={styles.akageraNationalPark}>Rubavu</div>
          <div className={styles.frameParent}>
            <div className={styles.milesAwayParent}>
              <div className={styles.milesAway}>19 miles away</div>
              <div className={styles.moneyMouthFace1Parent}>
                <img
                  className={styles.moneyMouthFace1Icon}
                  alt=""
                  src="../moneymouthface-1.svg"
                />
                <img
                  className={styles.moneyMouthFace1Icon}
                  alt=""
                  src="../moneymouthface-1.svg"
                />
              </div>
            </div>
            <div className={styles.iconlyboldstarParent}>
              <img
                className={styles.iconlyboldstar}
                alt=""
                src="../iconlyboldstar.svg"
              />
              <div className={styles.milesAway}>4.8</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
