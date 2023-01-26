import styles from "./TripsPageWithPastTrips.module.css";

const TripsPageWithPastTrips = () => {
  return (
    <div className={styles.tripsPageWithPastTrips}>
      <div className={styles.header}>
        <div className={styles.outside}>outside</div>
        <div className={styles.travelDatesParent}>
          <div className={styles.travelDates}>
            <div className={styles.travelDatesChild} />
            <div className={styles.travelDatesItem} />
            <div className={styles.travelDatesInner}>
              <div className={styles.searchParent}>
                <b className={styles.search}>Search</b>
                <img
                  className={styles.iconlycurvedsearch}
                  alt=""
                  src="../iconlycurvedsearch1.svg"
                />
              </div>
            </div>
            <div className={styles.vuesaxoutlinelocationParent}>
              <img
                className={styles.vuesaxoutlinelocationIcon}
                alt=""
                src="../vuesaxoutlinelocation1.svg"
              />
              <div className={styles.location}>Location</div>
              <div className={styles.addLocation}>Add location</div>
            </div>
            <div className={styles.vuesaxlinearcalendarParent}>
              <img
                className={styles.vuesaxlinearcalendarIcon}
                alt=""
                src="../vuesaxlinearcalendar1.svg"
              />
              <div className={styles.date}>Date</div>
              <div className={styles.addDates}>Add dates</div>
            </div>
            <div className={styles.vuesaxlinearprofileParent}>
              <img
                className={styles.vuesaxlinearprofileIcon}
                alt=""
                src="../vuesaxlinearprofile.svg"
              />
              <div className={styles.guests}>Guests</div>
              <div className={styles.addGuests}>Add guests</div>
            </div>
            <img className={styles.vectorIcon} alt="" src="../vector-1.svg" />
            <img
              className={styles.travelDatesChild1}
              alt=""
              src="../vector-2.svg"
            />
          </div>
          <img className={styles.frameChild} alt="" src="../group-112.svg" />
        </div>
      </div>
      <b className={styles.myTrips}>My Trips</b>
      <div className={styles.frameParent}>
        <div className={styles.upcomingTripsParent}>
          <b className={styles.upcomingTrips}>Upcoming Trips</b>
          <div className={styles.booking}>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="../mask-group26@2x.png"
              />
              <div className={styles.akageraNationalParkParent}>
                <div className={styles.akageraNationalPark}>Kigali</div>
                <div className={styles.frameGroup}>
                  <div className={styles.milesAwayParent}>
                    <div className={styles.milesAway}>19 miles away</div>
                    <div className={styles.moneyMouthFace1Parent}>
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-113.svg"
                      />
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-113.svg"
                      />
                      <img
                        className={styles.moneyMouthFace1Icon}
                        alt=""
                        src="../moneymouthface-113.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="../iconlyboldstar12.svg"
                    />
                    <div className={styles.milesAway}>4.8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.upcomingTripsParent}>
          <b className={styles.upcomingTrips}>Past Trips</b>
          <div className={styles.bookingParent}>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group27@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Rubavu</div>
                  <div className={styles.frameGroup}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Parent}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-116.svg"
                        />
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-116.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar15.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group28@2x.png"
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
                          src="../moneymouthface-116.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar15.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group29@2x.png"
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
                          src="../moneymouthface-116.svg"
                        />
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-116.svg"
                        />
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-116.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar15.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.experiencesToAddNearKigaliParent}>
          <b className={styles.experiencesToAdd}>
            Experiences to add near Kigali
          </b>
          <div className={styles.bookingGroup}>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group30@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>
                    Volcanoes National Park
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-128.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar28.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group31@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>
                    Akagera National Park
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-128.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar28.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group32@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>
                    Nyungwe National Park
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Parent}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-128.svg"
                        />
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-128.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar28.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.restaurantsToTryNearKigaliParent}>
          <b className={styles.experiencesToAdd}>
            Restaurants to try near Kigali
          </b>
          <div className={styles.bookingContainer}>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group33@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Amahoro Bar</div>
                  <div className={styles.frameGroup}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-131.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar31.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group34@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Brochettes</div>
                  <div className={styles.frameGroup}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-131.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar31.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group35@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Mizuzu</div>
                  <div className={styles.frameGroup}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-131.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar31.svg"
                      />
                      <div className={styles.milesAway}>4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent8}>
          <div className={styles.barsToTryNearKigaliParent}>
            <b className={styles.upcomingTrips}>Bars to try near Kigali</b>
            <b className={styles.viewAll}>View all</b>
          </div>
          <div className={styles.bookingParent}>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group36@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Soko Bar</div>
                  <div className={styles.frameGroup}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>12 miles away</div>
                      <div className={styles.moneyMouthFace1Parent}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-134.svg"
                        />
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-134.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar34.svg"
                      />
                      <div className={styles.milesAway}>3.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group37@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Iriba Bar</div>
                  <div className={styles.frameGroup}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>7 miles away</div>
                      <div className={styles.moneyMouthFace1Wrapper}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-134.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar34.svg"
                      />
                      <div className={styles.milesAway}>4.1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.booking1}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group38@2x.png"
                />
                <div className={styles.akageraNationalParkParent}>
                  <div className={styles.akageraNationalPark}>Yard bar</div>
                  <div className={styles.frameGroup}>
                    <div className={styles.milesAwayParent}>
                      <div className={styles.milesAway}>19 miles away</div>
                      <div className={styles.moneyMouthFace1Parent}>
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-134.svg"
                        />
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-134.svg"
                        />
                        <img
                          className={styles.moneyMouthFace1Icon}
                          alt=""
                          src="../moneymouthface-134.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconlyboldstarParent}>
                      <img
                        className={styles.iconlyboldstar}
                        alt=""
                        src="../iconlyboldstar34.svg"
                      />
                      <div className={styles.milesAway}>4.9</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.frameParent12}>
          <div className={styles.frameParent13}>
            <div className={styles.outsideParent}>
              <div className={styles.outside}>outside</div>
              <div className={styles.instagramIconParent}>
                <img
                  className={styles.moneyMouthFace1Icon}
                  alt=""
                  src="../instagram-icon1.svg"
                />
                <img
                  className={styles.moneyMouthFace1Icon}
                  alt=""
                  src="../facebook-icon1.svg"
                />
                <img
                  className={styles.moneyMouthFace1Icon}
                  alt=""
                  src="../twitter-bird-icon1.svg"
                />
                <img
                  className={styles.moneyMouthFace1Icon}
                  alt=""
                  src="../youtube-google-player-social-video-icon1.svg"
                />
              </div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.joinOurNewsletter}>
                Join our newsletter to stay up to date on features and releases.
              </div>
              <div className={styles.textInputParent}>
                <div className={styles.textInput}>
                  <div className={styles.placeholder}>Enter your email</div>
                </div>
                <div className={styles.lightPillSelected}>
                  <b className={styles.label}>Subscribe</b>
                </div>
              </div>
              <div className={styles.bySubscribingYou}>
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </div>
            </div>
          </div>
          <div className={styles.frameParent14}>
            <div className={styles.quickLinkParent}>
              <div className={styles.outside}>Quick link</div>
              <div className={styles.missionParent}>
                <div className={styles.support}>Booking</div>
                <div className={styles.support}>Support</div>
                <div className={styles.support}>Reviews</div>
              </div>
            </div>
            <div className={styles.quickLinkParent}>
              <div className={styles.outside}>Company</div>
              <div className={styles.missionParent}>
                <div className={styles.support}>Mission</div>
                <div className={styles.support}>Career</div>
                <div className={styles.support}>About us</div>
              </div>
            </div>
            <div className={styles.legalInformationParent}>
              <div className={styles.outside}>Legal information</div>
              <div className={styles.termsOfUseParent}>
                <div className={styles.support}>Terms of use</div>
                <div className={styles.support}>Privacy Policy</div>
                <div className={styles.support}>
                  Hospitality Licence agreement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsPageWithPastTrips;
