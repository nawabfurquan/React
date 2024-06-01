import { render, screen } from "@testing-library/react";
import Header from ".";
import { BrowserRouter } from "react-router-dom";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

it("should render Header component", () => {
  render(<MockHeader />);
  const header = screen.getByTestId(/header/i);
  expect(header).toBeInTheDocument();
});

it("should contain logo", () => {
  render(<MockHeader />);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});

it("should have explore button", () => {
  render(<MockHeader />);
  const explore = screen.getByText(/Explore/i);
  expect(explore).toBeInTheDocument();
});
