import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import SortOptions from "./SortOptions";
import { describe, it, expect, vi, afterEach } from "vitest";

describe("SortOptions", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders all sort buttons", () => {
    render(
      <SortOptions currentSortOption="alphabetic" setSortOption={vi.fn()} />
    );

    expect(screen.getByTestId("sort-price")).toBeInTheDocument();
    expect(screen.getByTestId("sort-alphabetic")).toBeInTheDocument();
    expect(screen.getByTestId("sort-star")).toBeInTheDocument();
  });

  it("calls setSortOption with 'alphabetic' when the alphabetic button is clicked", async () => {
    const setSortOption = vi.fn();
    render(
      <SortOptions currentSortOption="price" setSortOption={setSortOption} />
    );

    fireEvent.click(screen.getByTestId("sort-alphabetic"));
    expect(setSortOption).toHaveBeenCalledWith("alphabetic");
  });

  it("calls setSortOption with 'price' when the price button is clicked", () => {
    const setSortOption = vi.fn();
    render(
      <SortOptions
        currentSortOption="alphabetic"
        setSortOption={setSortOption}
      />
    );

    fireEvent.click(screen.getByTestId("sort-price"));
    expect(setSortOption).toHaveBeenCalledWith("price");
  });

  it("calls setSortOption with 'star' when the star rating button is clicked", () => {
    const setSortOption = vi.fn();
    render(
      <SortOptions
        currentSortOption="alphabetic"
        setSortOption={setSortOption}
      />
    );

    fireEvent.click(screen.getByTestId("sort-star"));
    expect(setSortOption).toHaveBeenCalledWith("star");
  });

  it("applies the correct class to the currently selected sorting option", () => {
    render(
      <SortOptions currentSortOption="alphabetic" setSortOption={vi.fn()} />
    );

    expect(screen.getByTestId("sort-alphabetic")).toHaveClass(
      "bg-dark-blue text-white"
    );
  });
});
