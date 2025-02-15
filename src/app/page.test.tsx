import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import mockHolidayData from "./mocks/holidays.json";
import Home from "./page";

// Pages are better suited for E2E tests rather than unit tests.
// Unit tests should focus on individual components, while E2E tests ensure the full user flow works correctly.
// Moving data fetching to the CardList component would improve testability and separation of concerns.

describe("Home Page", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders loading state", () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(mockHolidayData), { status: 200 })
    );

    render(<Home />);
    expect(screen.getByText("Loading....")).toBeInTheDocument();

    waitFor(() => {
      expect(screen.queryByText("Loading....")).not.toBeInTheDocument();
    });
  });

  it("renders error state on fetch failure", async () => {
    vi.spyOn(global, "fetch").mockRejectedValueOnce(new Error("Network error"));

    render(<Home />);

    await waitFor(() => {
      expect(
        screen.getByText("An unexpected error occured.")
      ).toBeInTheDocument();
    });
  });

  it("renders cards on successful fetch", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(mockHolidayData), { status: 200 })
    );

    render(<Home />);

    await waitFor(() => {
      expect(screen.getAllByTestId("card")).toHaveLength(
        mockHolidayData.length
      );
    });
  });
});
