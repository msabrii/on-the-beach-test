import Image from "next/image";
import CardList from "./components/CardList/CardList";

export interface HolidayData {
  resort: {
    id: string;
    name: string;
    regionName: string;
    countryName: string;
    starRating: number;
    overview: string;
    image: { url: string };
  };
  flightDetails: {
    departureAirport: string;
    departureDate: string;
  };
  bookingDetails: {
    party: {
      adults: number;
      children?: number;
      infants?: number;
    };
    lengthOfStay: 7;
    price: { amount: number; currency: string };
  };
}

const Home = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute w-screen h-screen -z-10">
        <Image
          fill
          src="https://static.onthebeach.co.uk/fe-code-test/background.png"
          alt="Background image"
          aria-hidden
        />
      </div>
      {/* Cards List */}
      <CardList />
    </>
  );
};

export default Home;
