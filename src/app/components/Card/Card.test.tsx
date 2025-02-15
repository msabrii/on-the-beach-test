import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import mockHolidayData from "../../mocks/holidays.json";
import Card from "./Card";
import renderPrice from "@/utils/renderPrice";

const mockHoliday = mockHolidayData[0];

describe("Card", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the card with holiday data", () => {
    render(<Card holiday={mockHoliday} />);
    expect(screen.getByText(mockHoliday.resort.name)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockHoliday.resort.regionName}, ${mockHoliday.resort.countryName}`
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Book now")).toBeInTheDocument();
  });

  it("displays the correct star rating", () => {
    render(<Card holiday={mockHoliday} />);
    const starRating = "⭐️".repeat(mockHoliday.resort.starRating);
    expect(screen.getByText(starRating)).toBeInTheDocument();
  });

  it("toggles the disclosure panel", () => {
    render(<Card holiday={mockHoliday} />);
    const button = screen.getByText("Read more about this hotel");
    fireEvent.click(button);
    expect(screen.getByText("Read less about this hotel")).toBeInTheDocument();
    expect(screen.getByText(mockHoliday.resort.overview)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText("Read more about this hotel")).toBeInTheDocument();
  });

  it("displays the correct price", () => {
    render(<Card holiday={mockHoliday} />);

    const price = renderPrice(
      mockHoliday.bookingDetails.price.amount,
      mockHoliday.bookingDetails.price.currency
    );
    expect(screen.getByText(price)).toBeInTheDocument();
  });
});
