"use client";

import { HolidayData } from "@/app/page";
import React from "react";
import Card from "../Card/Card";

const CardList = ({ cards }: { cards: HolidayData[] }) => {
  return (
    <div className="flex flex-col gap-4 col-span-12 sm:col-span-12 lg:col-start-4">
      {cards?.map((holiday, idx) => (
        <Card holiday={holiday} key={idx} />
      ))}
    </div>
  );
};

export default CardList;
