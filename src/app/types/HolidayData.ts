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
    lengthOfStay: number;
    price: { amount: number; currency: string };
  };
}
