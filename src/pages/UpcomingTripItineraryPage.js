import styles from "./UpcomingTripItineraryPage.module.css";

const UpcomingTripItineraryPage = () => {
  return (
    <div className={styles.upcomingTripitineraryPage}>
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
          <img className={styles.frameChild} alt="" src="../group-113.svg" />
        </div>
      </div>
      <b className={styles.myTrips}>My Trips</b>
      <b className={styles.itinerary}>Itinerary</b>
      <div className={styles.footer}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.outsideParent}>
              <div className={styles.outside}>outside</div>
              <div className={styles.instagramIconParent}>
                <img
                  className={styles.instagramIcon}
                  alt=""
                  src="../instagram-icon1.svg"
                />
                <img
                  className={styles.instagramIcon}
                  alt=""
                  src="../facebook-icon1.svg"
                />
                <img
                  className={styles.instagramIcon}
                  alt=""
                  src="../twitter-bird-icon1.svg"
                />
                <img
                  className={styles.instagramIcon}
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
          <div className={styles.frameContainer}>
            <div className={styles.quickLinkParent}>
              <div className={styles.outside}>Quick link</div>
              <div className={styles.bookingParent}>
                <div className={styles.booking}>Booking</div>
                <div className={styles.booking}>Support</div>
                <div className={styles.booking}>Reviews</div>
              </div>
            </div>
            <div className={styles.quickLinkParent}>
              <div className={styles.outside}>Company</div>
              <div className={styles.bookingParent}>
                <div className={styles.booking}>Mission</div>
                <div className={styles.booking}>Career</div>
                <div className={styles.booking}>About us</div>
              </div>
            </div>
            <div className={styles.legalInformationParent}>
              <div className={styles.outside}>Legal information</div>
              <div className={styles.termsOfUseParent}>
                <div className={styles.booking}>Terms of use</div>
                <div className={styles.booking}>Privacy Policy</div>
                <div className={styles.booking}>
                  Hospitality Licence agreement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.iconLeftArrow}
        alt=""
        src="../icon--left-arrow.svg"
      />
      <div className={styles.bookingGroup}>
        <div className={styles.booking1}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="../mask-group39@2x.png"
            />
            <div className={styles.akageraNationalParkParent}>
              <div className={styles.akageraNationalPark}>Kigali</div>
              <div className={styles.frameDiv}>
                <div className={styles.milesAwayParent}>
                  <div className={styles.milesAway}>19 miles away</div>
                  <div className={styles.moneyMouthFace1Parent}>
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                    <img
                      className={styles.instagramIcon}
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
        <div className={styles.tripDetails}>
          <b className={styles.kigali}>Kigali</b>
          <div className={styles.details}>
            <div className={styles.kigaliRwanda}>Kigali, Rwanda</div>
            <div className={styles.directions}>Directions</div>
            <div className={styles.kigaliRwanda}>November 10-17</div>
          </div>
        </div>
        <div className={styles.homePageButtons}>
          <div className={styles.buttonPlain}>
            <b className={styles.kigali}>CANCEL</b>
          </div>
        </div>
        <div className={styles.homePageButtons1}>
          <div className={styles.buttonPlain}>
            <b className={styles.kigali}>MAKE CHANGES</b>
          </div>
        </div>
      </div>
      <div className={styles.bookingContainer}>
        <div className={styles.booking2}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="../mask-group26@2x.png"
            />
            <div className={styles.akageraNationalParkGroup}>
              <div className={styles.akageraNationalPark}>Kigali</div>
              <div className={styles.frameDiv}>
                <div className={styles.milesAwayParent}>
                  <div className={styles.milesAway}>19 miles away</div>
                  <div className={styles.moneyMouthFace1Parent}>
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                    <img
                      className={styles.instagramIcon}
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
        <img
          className={styles.maskGroupIcon2}
          alt=""
          src="../mask-group41@2x.png"
        />
        <div className={styles.tripDetails1}>
          <b className={styles.brochettes}>Brochettes</b>
          <div className={styles.details1}>
            <div className={styles.kigaliRwanda}>Kigali, Rwanda</div>
            <div className={styles.viewDetails}>Directions</div>
            <div className={styles.kigaliRwanda}>November 10</div>
          </div>
          <div className={styles.kigaliRwanda}>12:00 PM</div>
        </div>
        <div className={styles.homePageButtons2}>
          <div className={styles.buttonPlain}>
            <b className={styles.kigali}>CANCEL</b>
          </div>
        </div>
        <div className={styles.homePageButtons3}>
          <div className={styles.buttonPlain}>
            <b className={styles.kigali}>MAKE CHANGES</b>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.booking2}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="../mask-group26@2x.png"
            />
            <div className={styles.akageraNationalParkGroup}>
              <div className={styles.akageraNationalPark}>Kigali</div>
              <div className={styles.frameDiv}>
                <div className={styles.milesAwayParent}>
                  <div className={styles.milesAway}>19 miles away</div>
                  <div className={styles.moneyMouthFace1Parent}>
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                    <img
                      className={styles.instagramIcon}
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
        <div className={styles.tripDetails1}>
          <b className={styles.brochettes}>Kigali</b>
          <div className={styles.details1}>
            <div className={styles.kigaliRwanda}>Kigali, Rwanda</div>
            <div className={styles.viewDetails}>Directions</div>
            <div className={styles.kigaliRwanda}>November 10</div>
          </div>
          <div className={styles.kigaliRwanda}>4:00 PM</div>
          <div className={styles.viewDetails}>View Details</div>
        </div>
        <div className={styles.homePageButtons2}>
          <div className={styles.buttonPlain}>
            <b className={styles.kigali}>CANCEL</b>
          </div>
        </div>
        <div className={styles.homePageButtons3}>
          <div className={styles.buttonPlain}>
            <b className={styles.kigali}>MAKE CHANGES</b>
          </div>
        </div>
      </div>
      <div className={styles.bookingParent1}>
        <div className={styles.booking2}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="../mask-group26@2x.png"
            />
            <div className={styles.akageraNationalParkParent}>
              <div className={styles.akageraNationalPark}>Kigali</div>
              <div className={styles.frameDiv}>
                <div className={styles.milesAwayParent}>
                  <div className={styles.milesAway}>19 miles away</div>
                  <div className={styles.moneyMouthFace1Parent}>
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                  </div>
                </div>
                <div className={styles.iconlyboldstarParent1}>
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
        <img
          className={styles.maskGroupIcon2}
          alt=""
          src="../mask-group44@2x.png"
        />
        <div className={styles.tripDetails1}>
          <b className={styles.brochettes}>Volcanoes National Park</b>
          <div className={styles.details1}>
            <div className={styles.kigaliRwanda}>Kigali, Rwanda</div>
            <div className={styles.viewDetails}>Directions</div>
            <div className={styles.kigaliRwanda}>November 10</div>
          </div>
          <div className={styles.kigaliRwanda}>2:00 PM</div>
          <div className={styles.viewDetails}>View Details</div>
        </div>
        <div className={styles.homePageButtons2}>
          <div className={styles.buttonPlain}>
            <b className={styles.kigali}>CANCEL</b>
          </div>
        </div>
        <div className={styles.homePageButtons3}>
          <div className={styles.buttonPlain}>
            <b className={styles.kigali}>MAKE CHANGES</b>
          </div>
        </div>
      </div>
      <div className={styles.bookingParent2}>
        <div className={styles.booking2}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="../mask-group26@2x.png"
            />
            <div className={styles.akageraNationalParkGroup}>
              <div className={styles.akageraNationalPark}>Kigali</div>
              <div className={styles.frameDiv}>
                <div className={styles.milesAwayParent}>
                  <div className={styles.milesAway}>19 miles away</div>
                  <div className={styles.moneyMouthFace1Parent}>
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                    <img
                      className={styles.instagramIcon}
                      alt=""
                      src="../moneymouthface-113.svg"
                    />
                    <img
                      className={styles.instagramIcon}
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
        <img
          className={styles.maskGroupIcon7}
          alt=""
          src="../mask-group12@2x.png"
        />
        <div className={styles.tripDetails1}>
          <b className={styles.brochettes}>Yard Bar</b>
          <div className={styles.details1}>
            <div className={styles.kigaliRwanda}>Kigali, Rwanda</div>
            <div className={styles.viewDetails}>Directions</div>
            <div className={styles.kigaliRwanda}>November 10-17</div>
          </div>
          <div className={styles.kigaliRwanda}>7:00 PM</div>
          <div className={styles.viewDetails}>View Details</div>
        </div>
        <div className={styles.homePageButtons2}>
          <div className={styles.buttonPlain}>
            <b className={styles.kigali}>CANCEL</b>
          </div>
        </div>
        <div className={styles.homePageButtons3}>
          <div className={styles.buttonPlain}>
            <b className={styles.kigali}>MAKE CHANGES</b>
          </div>
        </div>
      </div>
      <div className={styles.viewDetails3}>View Details</div>
      <div className={styles.moreExperiencesToAddToItiParent}>
        <b className={styles.moreExperiencesTo}>
          More Experiences to Add to Itinerary
        </b>
        <div className={styles.bookingParent3}>
          <div className={styles.booking6}>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="../mask-group47@2x.png"
              />
              <div className={styles.akageraNationalParkParent3}>
                <div className={styles.akageraNationalPark5}>Amahoro Bar</div>
                <div className={styles.frameParent5}>
                  <div className={styles.milesAwayParent3}>
                    <div className={styles.milesAway}>19 miles away</div>
                    <div className={styles.moneyMouthFace1Wrapper}>
                      <img
                        className={styles.instagramIcon}
                        alt=""
                        src="../moneymouthface-142.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="../iconlyboldstar42.svg"
                    />
                    <div className={styles.milesAway}>4.8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.booking6}>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="../mask-group48@2x.png"
              />
              <div className={styles.akageraNationalParkParent3}>
                <div className={styles.akageraNationalPark5}>Mizuzu</div>
                <div className={styles.frameParent5}>
                  <div className={styles.milesAwayParent3}>
                    <div className={styles.milesAway}>19 miles away</div>
                    <div className={styles.moneyMouthFace1Wrapper}>
                      <img
                        className={styles.instagramIcon}
                        alt=""
                        src="../moneymouthface-142.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.iconlyboldstarParent}>
                    <img
                      className={styles.iconlyboldstar}
                      alt=""
                      src="../iconlyboldstar42.svg"
                    />
                    <div className={styles.milesAway}>4.8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <b className={styles.viewAll}>View all</b>
      </div>
      <div className={styles.booking8}>
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="../mask-group49@2x.png"
          />
          <div className={styles.akageraNationalParkParent3}>
            <div className={styles.akageraNationalPark5}>
              Akagera National Park
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.milesAwayParent3}>
                <div className={styles.milesAway}>19 miles away</div>
                <div className={styles.moneyMouthFace1Wrapper}>
                  <img
                    className={styles.instagramIcon}
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
  );
};

export default UpcomingTripItineraryPage;
