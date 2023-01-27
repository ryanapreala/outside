import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecommendedBookings } from '../actions/bookingActions';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./HomePage.module.css";

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

  const renderBookingCategories = (bookings) =>
    Object.keys(bookings).map((category) => (
      <div key={category} className="category-container">
        <h2 className="category-title">{category}</h2>
        {bookings[category].slice(0, 4).map((booking) => (
          <div key={booking.id} className="booking-container">
            <h3 className="booking-name">{booking.name}</h3>
            <img
              src={booking.imageUrl}
              alt={booking.name}
              className="booking-image"
            />
            <p className="booking-price">Price: {booking.price}</p>
            <p className="booking-location">Location: {booking.location}</p>
          </div>
        ))}
        <button
          className="view-more-button"
          onClick={() => handleViewMore(category)}
        >
          View More
        </button>
      </div>
    ));

/**
   * Handles the view more button click
   * @param {string} category - The category of the bookings to view more of
   */
  const handleViewMore = (category) => {
    // navigate to a new page or show a modal with more recommendations
  };

  return (
    <div className="home-container">
      <Header />
      <Hero />
      {renderBookingCategories(recommendedBookings)}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  recommendedBookings: state.bookings.recommendedBookings,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecommendedBookings: () => dispatch(fetchRecommendedBookings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
