import { render, screen } from "@testing-library/react";
import Footer from ".";

it("should render the book detail", () => {
  render(<Footer />);
  const footer = screen.getByTestId(/footer/i);
  expect(footer).toBeInTheDocument();
});

it("should contain the logo", () => {
  render(<Footer />);
  const logo = screen.getByAltText(/Logo/i);
  expect(logo).toBeInTheDocument();
});

it("should have the title", () => {
  render(<Footer />);
  const title = screen.getByText(/Big ideas in small packages/i);
  expect(title).toBeInTheDocument();
});
