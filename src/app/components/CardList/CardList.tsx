"use client";

import { HolidayData } from "@/app/page";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const CardList = () => {
  const [data, setData] = useState<undefined | HolidayData[]>();
  const [error, setError] = useState<{ error: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="flex flex-col gap-4">
      {isLoading && <p>Loading....</p>}

      {!error &&
        !isLoading &&
        data &&
        data?.map((holiday, idx) => <Card holiday={holiday} key={idx} />)}

      {error && <p>An unexpected error occured.</p>}
    </div>
  );
};

export default CardList;
