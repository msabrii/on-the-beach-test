"use client";

import { HolidayData } from "@/app/page";
import renderDate from "@/utils/renderDate";
import renderPrice from "@/utils/renderPrice";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Card = ({ holiday }: { holiday: HolidayData }) => {
  const { resort, bookingDetails, flightDetails } = holiday;
  const { regionName, countryName, starRating, overview, name, image } = resort;
  const { lengthOfStay, price, party } = bookingDetails;
  const { departureAirport, departureDate } = flightDetails;

  const renderStarRating = (numStars: number) => "⭐️".repeat(numStars);

  return (
    <div className="relative bg-white lg:max-w-[800px]">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full sm:w-[400px] lg:w-[500px] shrink-0 h-[260px]">
          <Image src={image.url} alt={name} fill className="object-cover" />
        </div>
        {/* Sidebar */}
        <div className="flex p-4 items-start justify-center flex-col gap-1 w-full text-dark-blue">
          <span className="text-lg font-bold">{name}</span>
          <span className="text-grey font-medium">{`${regionName}, ${countryName}`}</span>
          {starRating > 0 && (
            <span className="text-black mt-1">
              {renderStarRating(starRating)}
            </span>
          )}
          <span className="mt-1 text-xs text-black">
            <span className="font-bold">{party.adults}</span> Adults,{" "}
            {party?.children && (
              <>
                <span className="font-bold">{party.children}</span> children
                {party?.infants && ",  "}
              </>
            )}
            {party?.infants && (
              <>
                <span className="font-bold">{party.infants}</span> infants
              </>
            )}
          </span>
          <span className="text-black text-xs">
            <span className="font-bold">{renderDate(departureDate)}</span> for{" "}
            <span className="font-bold">{lengthOfStay}</span> days
          </span>
          <span className="text-black text-xs">
            Departing from <span className="font-bold">{departureAirport}</span>
          </span>
          <button
            type="button"
            className="flex mt-2 font-bold flex-col justify-center items-center bg-yellow w-full rounded-md p-2"
          >
            <span className="text-xs">Book now</span>
            <span className="text-xl">
              {renderPrice(price.amount, price.currency)}
            </span>
          </button>
        </div>
      </div>
      {/* Dropdown */}
      <Disclosure as="div">
        {({ open }) => (
          <>
            <DisclosureButton className="flex relative sm:-mt-6 pb-2 sm:pb-0 items-center gap-2 px-3 bg-white text-dark-blue">
              {open
                ? "Read less about this hotel"
                : "Read more about this hotel"}
              {/* use emoji for down arrow */}
              <span
                className={clsx({
                  "transform rotate-180": open,
                })}
              >
                ⬇️
              </span>
            </DisclosureButton>
            <DisclosurePanel className="flex flex-col gap-1 px-3 pb-4 bg-white text-dark-blue">
              <span className="font-bold mt-3">Overview</span>
              <p className="text-black">{overview}</p>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Card;
