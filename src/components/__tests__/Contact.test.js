import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  beforeAll(() => {
    console.log("Before all ");
  });

  afterAll(() => {
    console.log("After all");
  });
  afterEach(() => {
    console.log("After Each");
  });

  beforeEach(() => {
    console.log("Before each");
  });

  test("Should load contact us component", () => {
    //we cannot use jsx here without @babel/preset-react dependency
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    //we cannot use jsx here without @babel/preset-react dependency
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("Should load input name inside contact us component", () => {
    //we cannot use jsx here without @babel/preset-react dependency
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();
  });
  test("Should load two input boxes inside contact us component", () => {
    //we cannot use jsx here without @babel/preset-react dependency
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Asserting
    expect(inputBoxes.length).toBe(2);
  });
});
