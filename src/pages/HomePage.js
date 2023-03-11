import Header from "../components/Header"
import Hero from "../components/Hero";
import NavButtons from "../components/NavButtons";
import BookingList from "../components/BookingList";
const HomePage = () => {
    return(
        <>
            <Header />
            <Hero />
            <NavButtons />
            <BookingList listTitle={"Recommended for you"}/>
        </>
    );
}
export default HomePage;