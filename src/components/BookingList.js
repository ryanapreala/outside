import styles from "./BookingList.module.css";

const BookingList = ({listTitle}) => {
    return (
        <div className={styles.container}>
            <div className={styles.listText}>
                <div className={styles.cardHeadingStyle}>
                    {listTitle}
                </div>
            </div>
            <div>
                <div><a>View all</a></div>
            </div>
        </div>
    );
}

export default BookingList;