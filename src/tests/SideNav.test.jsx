import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideNavOption from "../components/ui/SideNav/SideNavOpt";
import community_head from "../utils/headerdata/community_head";

describe("Side Nav Component", () => {
  it("Renders sidenavoption component when sidenav is visible", () => {
    const container = render(
      <MemoryRouter>
        <SideNavOption navObj={community_head} isActive={true} />
      </MemoryRouter>
    );

    expect(container.getByText(/Articles/i)).toBeVisible();
    expect(container.getByText(/Boards/i)).toBeVisible();
    expect(container.getByText(/Clubs/i)).toBeVisible();
    expect(container.getByText(/Lists/i)).toBeVisible();
  });
});
