import { render, screen } from "@testing-library/react";
import BookDetailView from ".";
import { BrowserRouter } from "react-router-dom";

const BookDetail = () => {
  return (
    <BrowserRouter>
      <BookDetailView />
    </BrowserRouter>
  );
};

it("should render the book detail", () => {
  render(<BookDetail />);
  const bookDetail = screen.getByTestId(/bookDetail/i);
  expect(bookDetail).toBeInTheDocument();
});

it("should contain the read now button", () => {
  render(<BookDetail />);
  const button = screen.queryByText(/Read now/i);
  expect(button).toBeInTheDocument();
});

it("should contain the Finished Reading button", () => {
  render(<BookDetail />);
  const button = screen.queryByText(/Finished Reading/i);
  expect(button).toBeInTheDocument();
});

it("should contain Link tag", () => {
  render(<BookDetail />);
  const link = screen.queryByRole("link");
  expect(link).toBeInTheDocument();
});
