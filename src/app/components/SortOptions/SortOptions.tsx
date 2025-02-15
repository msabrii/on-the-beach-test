import cn from "@/utils/cn";
import React from "react";

const SortOptions = ({
  currentSortOption,
  setSortOption,
}: {
  currentSortOption: string;
  setSortOption: (option: string) => void;
}) => {
  return (
    <div className="flex flex-col col-span-12 sm:col-span-4 lg:col-span-3">
      <button
        type="button"
        data-testid="sort-alphabetic"
        className={cn("px-4 py-2 bg-white text-left text-dark-blue", {
          "bg-dark-blue text-white": currentSortOption === "alphabetic",
        })}
        onClick={() => {
          setSortOption("alphabetic");
        }}
      >
        sort <span className="font-semibold">alphabetically</span>
      </button>
      <button
        type="button"
        data-testid="sort-price"
        className={cn("px-4 py-2 bg-white text-left text-dark-blue", {
          "bg-dark-blue text-white": currentSortOption === "price",
        })}
        onClick={() => {
          setSortOption("price");
        }}
      >
        sort by <span className="font-semibold">price</span>
      </button>
      <button
        type="button"
        data-testid="sort-star"
        className={cn("px-4 py-2 bg-white text-left text-dark-blue", {
          "bg-dark-blue text-white": currentSortOption === "star",
        })}
        onClick={() => {
          setSortOption("star");
        }}
      >
        sort by <span className="font-semibold">star rating</span>
      </button>
    </div>
  );
};

export default SortOptions;
