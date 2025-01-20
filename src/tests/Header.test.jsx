import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import HeaderWrapperDesk from "../components/ui/Header/HeaderWrapperDesk";
import { MemoryRouter } from "react-router-dom";

describe("Header Component", () => {
  it("Renders correct Header Title when rendering Page on Desktop", () => {
    const container = render(
      <MemoryRouter>
        <HeaderWrapperDesk />
      </MemoryRouter>
    );
    expect(
      container.getByRole("link", { name: "Figure-Chan" })
    ).toHaveAttribute("href", "/");
  });
});
