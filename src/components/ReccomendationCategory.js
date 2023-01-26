import Recommendation from "../components/Recommendation";
import styles from "./ReccomendationCategory.module.css";

const ReccomendationCategory = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.recommendedForYouParent}>
        <b className={styles.recommendedForYou}>Recommended for you</b>
        <b className={styles.viewAll}>View all</b>
      </div>
      <div className={styles.bookingParent}>
        <Recommendation />
        <div className={styles.booking}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="../mask-group2@2x.png"
            />
            <div className={styles.akageraNationalParkParent}>
              <div className={styles.akageraNationalPark}>Karongi</div>
              <div className={styles.frameGroup}>
                <div className={styles.milesAwayParent}>
                  <div className={styles.milesAway}>19 miles away</div>
                  <div className={styles.moneyMouthFace1Wrapper}>
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
        <div className={styles.booking}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="../mask-group3@2x.png"
            />
            <div className={styles.akageraNationalParkParent}>
              <div className={styles.akageraNationalPark}>Musanze</div>
              <div className={styles.frameGroup}>
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
      </div>
    </div>
  );
};

export default ReccomendationCategory;
