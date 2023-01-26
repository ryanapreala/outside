import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecommendedBookings } from '../actions/bookingActions';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

/**
 * Homepage component that displays the booking categories and 4 recommendations per category.
 * It also includes a way to view more recommendations.
 */
const Home = ({ recommendedBookings, fetchRecommendedBookings }) => {
  useEffect(() => {
    fetchRecommendedBookings();
  }, [fetchRecommendedBookings]);

  /**
   * Renders the booking categories and 4 recommendations per category.
   * @param {Object} bookings - The recommended bookings object
   * @returns {JSX.Element} - JSX element of the booking categories and recommendations
   */
  const renderBookingCategories = (bookings) => {
    return Object.keys(bookings).map((category) => (
      <div key={category}>
        <h2>{category}</h2>
        {bookings[category].slice(0, 4).map((booking) => (
          <div key={booking.id}>
            <h3>{booking.name}</h3>
            <img src={booking.imageUrl} alt={booking.name} />
            <p>Price: {booking.price}</p>
            <p>Location: {booking.location}</p>
          </div>
        ))}
        <button onClick={() => handleViewMore(category)}>View More</button>
      </div>
    ));
  };

  /**
   * Handles the view more button click
   * @param {string} category - The category of the bookings to view more of
   */
  const handleViewMore = (category) => {
    // navigate to a new page or show a modal with more recommendations
  };

  return (
    <>
      <Header />
      <Hero />
      <div>
        <h1>Recommended Bookings</h1>
        {renderBookingCategories(recommendedBookings)}
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  recommendedBookings: state.bookings.recommended,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecommendedBookings: () => dispatch(fetchRecommendedBookings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

