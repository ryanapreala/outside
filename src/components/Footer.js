import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.outsideParent}>
            <div className={styles.outside}>outside</div>
            <div className={styles.instagramIconParent}>
              <img
                className={styles.instagramIcon}
                alt=""
                src="../instagram-icon.svg"
              />
              <img
                className={styles.instagramIcon}
                alt=""
                src="../facebook-icon.svg"
              />
              <img
                className={styles.instagramIcon}
                alt=""
                src="../twitter-bird-icon.svg"
              />
              <img
                className={styles.instagramIcon}
                alt=""
                src="../youtube-google-player-social-video-icon.svg"
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
  );
};

export default Footer;
