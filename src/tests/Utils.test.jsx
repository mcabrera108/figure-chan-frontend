import { describe, it, expect } from "vitest";
import {
  hasAllConditionsForPassword,
  hasLowerCase,
  hasOneLetter,
  hasOneSpecialCharacter,
  hasUpperCase,
} from "../utils/validationMessage";

describe("Utils Folder", () => {
  it("hasUpperCase method returns true if presented with a string containing an uppercase value", () => {
    expect(hasUpperCase("Hello")).toBe(true);
  });
  it("hasUpperCase method returns false if presented with a string containing no uppercase value", () => {
    expect(hasUpperCase("world")).toBe(false);
  });
  it("hasLowerCase method returns true if presented with a string containing a lower case letter", () => {
    expect(hasLowerCase("WoRLD")).toBe(true);
  });
  it("hasLowerCase method returns false if presented with a string containing only upper case values", () => {
    expect(hasLowerCase("HELLO")).toBe(false);
  });
  it("hasOneLetter contains at least one alphabetical letter", () => {
    expect(hasOneLetter("!@#Y*()")).toBe(true);
  });
  it("hasOneLetter will return false if it does not contain an alphabetical letter", () => {
    expect(hasOneLetter("!@#$%&*(")).toBe(false);
  });
  it("hasOneSpecialCharacter contains at least one special character", () => {
    expect(hasOneSpecialCharacter("HELLOWORLD!")).toBe(true);
  });
  it("hasOneSpecialCharacter returns false if there are no special characters", () => {
    expect(hasOneSpecialCharacter("HELLOWORLD")).toBe(false);
  });
  it("hasAllConditionsForPassword is true if inputted str contains all necessary requirements to create password", () => {
    expect(hasAllConditionsForPassword("HelloWorld!123")).toBe(true);
  });
  it("hasAllConditionsForPassword returns false if inputted str does not contain all necessary requirements to create password", () => {
    expect(hasAllConditionsForPassword("HelloWorld123")).toBe(false);
  });
});
