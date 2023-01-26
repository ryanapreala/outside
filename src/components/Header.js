import styles from "./Header.module.css";

const Header = () => {
  return (
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
                src="../iconlycurvedsearch.svg"
              />
            </div>
          </div>
          <div className={styles.vuesaxoutlinelocationParent}>
            <img
              className={styles.vuesaxoutlinelocationIcon}
              alt=""
              src="../vuesaxoutlinelocation.svg"
            />
            <div className={styles.location}>Location</div>
            <div className={styles.addLocation}>Add location</div>
          </div>
          <div className={styles.vuesaxlinearcalendarParent}>
            <img
              className={styles.vuesaxlinearcalendarIcon}
              alt=""
              src="../vuesaxlinearcalendar.svg"
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
        <img className={styles.frameChild} alt="" src="../group-11.svg" />
      </div>
    </div>
  );
};

export default Header;
