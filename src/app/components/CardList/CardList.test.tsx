import { cleanup, render, screen } from "@testing-library/react";
import CardList from "./CardList";
import mockHolidayData from "../../mocks/holidays.json";
import { describe, it, expect, afterEach } from "vitest";

describe("CardList", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    render(<CardList cards={mockHolidayData} />);
  });

  it("renders the correct number of cards", () => {
    render(<CardList cards={mockHolidayData} />);
    const cardElements = screen.getAllByTestId("card");
    expect(cardElements.length).toBe(mockHolidayData.length);
  });

  it("renders no cards when the cards array is empty", () => {
    render(<CardList cards={[]} />);
    const cardElements = screen.queryAllByTestId("card");
    expect(cardElements.length).toBe(0);
  });
});
