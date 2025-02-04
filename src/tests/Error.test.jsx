import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Error from "../components/ui/Body/Error";
describe("Error Folder", () => {
  it("Renders proper error text when user inputs an incorrect URL", () => {
    const errorContainer = render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
    expect(
      errorContainer.getByText(
        /A network error has occurred while fetching the invenstory/i
      )
    ).toBeVisible();
  });
});
