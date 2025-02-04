import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Footer from "../components/ui/Footer/Footer";

describe("Footer Component", () => {
  it("Renders Footer Component with default static text", () => {
    const container = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(
      container.getByText("@ 2024-2025 Martin Cabrera. All rights reserved.")
    ).toBeVisible();
  });
});
