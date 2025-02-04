import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import HeaderWrapperDesk from "../components/ui/Header/HeaderWrapperDesk";
import HeaderWrapperMobile from "../components/ui/Header/HeadeWrapperMobile";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/ui/Header/Header";
import NavOpt from "../components/ui/Header/NavOpt";
import SubHeader from "../components/ui/Header/SubHeader";

describe("Header Component", () => {
  it("Renders Proper HeaderWrapper layout when correct screen size bool is given to component", () => {
    const mobileContainer = render(
      <MemoryRouter>
        <Header isMobileDevice={true} />
      </MemoryRouter>
    );
    waitFor(() =>
      expect(mobileContainer.getByRole("link", { name: "FC" })).toHaveAttribute(
        "href",
        "/"
      )
    );

    const desktopContainer = render(
      <MemoryRouter>
        <Header isMobileDevice={false} />
      </MemoryRouter>
    );

    waitFor(() =>
      expect(
        desktopContainer.getByRole("link", { name: "Figure-Dev" })
      ).toHaveAttribute("href", "/")
    );
  });
  it("Renders correct Header UI elements when rendering Page on Desktop", () => {
    const container = render(
      <MemoryRouter>
        <HeaderWrapperDesk />
      </MemoryRouter>
    );
    expect(container.getByRole("link", { name: "Figure-Dev" })).toHaveAttribute(
      "href",
      "/"
    );

    expect(container.getByRole("link", { name: "Login" })).toHaveAttribute(
      "href",
      "/login"
    );

    expect(container.getByRole("link", { name: "Register" })).toHaveAttribute(
      "href",
      "/register"
    );

    expect(container.getByLabelText("header-search-field")).toBeVisible();
  });
  it("Renders correct Header UI elements when rendering Page on Mobile", () => {
    const container = render(
      <MemoryRouter>
        <HeaderWrapperMobile />
      </MemoryRouter>
    );
    expect(container.getByRole("link", { name: "FC" })).toHaveAttribute(
      "href",
      "/"
    );

    expect(container.getByRole("link", { name: "Login" })).toHaveAttribute(
      "href",
      "/login"
    );

    expect(container.getByRole("link", { name: "Register" })).toHaveAttribute(
      "href",
      "/register"
    );
  });

  it("Renders proper navigation option when navOpt component is rendered", () => {
    const testdata = {
      navOptions: [
        { id: "123", navOptUrl: "/", navOptTitle: "Test Title" },
        { id: "1234", navOptUrl: "/test", navOptTitle: "Test Title Two" },
      ],
    };
    const container = render(
      <MemoryRouter>
        <NavOpt navObj={testdata} />
      </MemoryRouter>
    );

    expect(container.getByRole("link", { name: "Test Title" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(
      container.getByRole("link", { name: "Test Title Two" })
    ).toHaveAttribute("href", "/test");
  });

  it("Renders all subheader components", () => {
    const container = render(
      <MemoryRouter>
        <SubHeader />
      </MemoryRouter>
    );
    expect(container.getByRole("link", { name: "Database" })).toHaveAttribute(
      "href",
      "/search"
    );

    expect(container.getByRole("link", { name: "Community" })).toHaveAttribute(
      "href",
      "/"
    );

    expect(container.getByRole("link", { name: "News" })).toHaveAttribute(
      "href",
      "/"
    );

    expect(container.getByRole("link", { name: "Gallery" })).toHaveAttribute(
      "href",
      "/"
    );

    expect(container.getByRole("link", { name: "Shop" })).toHaveAttribute(
      "href",
      "/"
    );

    expect(container.getByRole("link", { name: "Help" })).toHaveAttribute(
      "href",
      "/rules"
    );
  });
});
