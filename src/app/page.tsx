"use client";

import Image from "next/image";
import CardList from "./components/CardList/CardList";
import { useEffect, useState, useCallback } from "react";
import SortOptions from "./components/SortOptions/SortOptions";

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
  const [sortOption, setSortOption] = useState("alphabetic");

  const [data, setData] = useState<undefined | HolidayData[]>();
  const [error, setError] = useState<{ error: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const sortData = useCallback(
    (data: HolidayData[]) => {
      if (sortOption === "alphabetic") {
        return data?.toSorted((a, b) => {
          return a.resort.name.localeCompare(b.resort.name);
        });
      }
      if (sortOption === "price") {
        return data?.toSorted((a, b) => {
          return a.bookingDetails.price.amount - b.bookingDetails.price.amount;
        });
      }
      if (sortOption === "star") {
        return data?.toSorted((a, b) => {
          return b.resort.starRating - a.resort.starRating;
        });
      }
    },
    [sortOption]
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/holidays");

      if (!response.ok) {
        console.log(response.statusText);
        const errorText = await response.json();
        setError(errorText);
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }

      const result: HolidayData[] = await response.json();
      setData(sortData(result));
      setIsLoading(false);
    };

    fetchData();
  }, [sortData]);

  useEffect(() => {
    setData((prev) => prev && sortData(prev));
  }, [sortOption, sortData]);

  console.log(sortOption);

  return (
    <div className="grid grid-cols-12 max-w-[1440px] pt-16 gap-6 mx-auto w-full px-4 sm:px-8 xl:px-16">
      {/* Background Image */}
      <div className="absolute left-0 top-0 w-screen h-screen -z-10">
        <Image
          fill
          src="https://static.onthebeach.co.uk/fe-code-test/background.png"
          alt="Background image"
          aria-hidden
        />
      </div>

      {/* Sort Options */}
      <SortOptions
        currentSortOption={sortOption}
        setSortOption={setSortOption}
      />
      {/* Cards List */}
      {data && !error && !isLoading && <CardList cards={data} />}
      {/* Loading State */}
      {isLoading && <p>Loading....</p>}
      {/* Error State */}
      {error && <p>An unexpected error occured.</p>}
    </div>
  );
};

export default Home;
