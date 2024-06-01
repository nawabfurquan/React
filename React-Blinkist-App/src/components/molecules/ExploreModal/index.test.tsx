import { render, screen } from "@testing-library/react";
import ExploreModal from ".";
import { BrowserRouter } from "react-router-dom";

const Modal = () => {
  return (
    <BrowserRouter>
      <ExploreModal />
    </BrowserRouter>
  );
};

it("should render the Book Card component", () => {
  render(<Modal />);
  const modal = screen.getByTestId(/exploreModal/i);
  expect(modal).toBeInTheDocument();
});

it("should have the Entrepreneurship button", () => {
  render(<Modal />);
  const button = screen.getByText(/Entrepreneurship/i);
  expect(button).toBeInTheDocument();
});
