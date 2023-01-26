import Hero from "../components/Hero";
import ReccomendationCategory from "../components/ReccomendationCategory";
import NavButtons from "../components/NavButtons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.maskGroupParent}>
        <Hero />
        <div className={styles.letsExploreRwandaWrapper}>
          <b className={styles.letsExploreRwanda}>Let’s explore Rwanda</b>
        </div>
      </div>
      <div className={styles.frameParent}>
        <ReccomendationCategory />
        <div className={styles.frameGroup}>
          <div className={styles.activitiesParent}>
            <b className={styles.activities}>Activities</b>
            <b className={styles.viewAll}>View all</b>
          </div>
          <div className={styles.bookingParent}>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group4@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>
                    Volcanoes National Park
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-13.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar3.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group5@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>
                    Akagera National Park
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-13.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar3.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group6@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>
                    Nyungwe National Park
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Parent}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-13.svg"
                        />
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-13.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar3.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.activitiesParent}>
            <b className={styles.activities}>Restaurants</b>
            <b className={styles.viewAll}>View all</b>
          </div>
          <div className={styles.bookingParent}>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group7@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Amahoro Bar</div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-16.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar6.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group8@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Brochettes</div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-16.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar6.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking}>
              <div className={styles.maskGroupGroup}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group9@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Mizuzu</div>
                  <div className={styles.frameContainer}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-16.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar6.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent6}>
        <div className={styles.activitiesParent}>
          <b className={styles.activities}>Bars</b>
          <b className={styles.viewAll}>View all</b>
        </div>
        <div className={styles.bookingParent}>
          <div className={styles.booking}>
            <div className={styles.maskGroupGroup}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="../mask-group10@2x.png"
              />
              <div className={styles.akageraNationalParkParent}>
                <div className={styles.akageraNationalPark}>Soko Bar</div>
                <div className={styles.frameContainer}>
                  <div className={styles.milesAwayParent}>
                    <div className={styles.milesAway}>12 miles away</div>
                    <div className={styles.moneyMouthFace1Parent}>
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-19.svg"
                      />
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-19.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="../iconlyboldstar9.svg"
                    />
                    <div className={styles.milesAway}>3.8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.booking}>
            <div className={styles.maskGroupGroup}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="../mask-group11@2x.png"
              />
              <div className={styles.akageraNationalParkParent}>
                <div className={styles.akageraNationalPark}>Iriba Bar</div>
                <div className={styles.frameContainer}>
                  <div className={styles.milesAwayParent}>
                    <div className={styles.milesAway}>7 miles away</div>
                    <div className={styles.moneyMouthFace1Wrapper}>
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-19.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="../iconlyboldstar9.svg"
                    />
                    <div className={styles.milesAway}>4.1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.booking}>
            <div className={styles.maskGroupGroup}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="../mask-group12@2x.png"
              />
              <div className={styles.akageraNationalParkParent}>
                <div className={styles.akageraNationalPark}>Yard bar</div>
                <div className={styles.frameContainer}>
                  <div className={styles.milesAwayParent}>
                    <div className={styles.milesAway}>19 miles away</div>
                    <div className={styles.moneyMouthFace1Parent}>
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-19.svg"
                      />
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-19.svg"
                      />
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-19.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="../iconlyboldstar9.svg"
                    />
                    <div className={styles.milesAway}>4.9</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavButtons />
      <Header />
      <Footer />
      <div className={styles.loginMenu}>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <div className={styles.akageraNationalPark}>Log in</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <div className={styles.akageraNationalPark}>My Trips</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <div className={styles.akageraNationalPark}>Settings</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <div className={styles.akageraNationalPark}>Payments</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <div className={styles.akageraNationalPark}>Log Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
