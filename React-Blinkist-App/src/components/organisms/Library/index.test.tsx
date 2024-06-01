import { render, screen } from "@testing-library/react";
import Library from ".";

it("should render Library component", () => {
  render(<Library />);
  const library = screen.getByTestId(/library/i);
  expect(library).toBeInTheDocument();
});

it("should contain Currently reading button", () => {
  render(<Library />);
  const button = screen.getByText(/Currently reading/i);
  expect(button).toBeInTheDocument();
});

it("should contain Finished button", () => {
  render(<Library />);
  const button = screen.getByText(/Finished/i);
  expect(button).toBeInTheDocument();
});
