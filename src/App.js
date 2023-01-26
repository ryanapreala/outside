import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomePage1 from "./pages/HomePage1";
import TripsPageWithPastTrips from "./pages/TripsPageWithPastTrips";
import UpcomingTripItineraryPage from "./pages/UpcomingTripItineraryPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/trips-page-with-past-trips":
        title = "";
        metaDescription = "";
        break;
      case "/upcoming-tripitinerary-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/home-page" element={<HomePage1 />} />

      <Route
        path="/trips-page-with-past-trips"
        element={<TripsPageWithPastTrips />}
      />

      <Route
        path="/upcoming-tripitinerary-page"
        element={<UpcomingTripItineraryPage />}
      />
    </Routes>
  );
}
export default App;
