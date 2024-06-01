import { render, screen } from "@testing-library/react";
import BookCard from ".";

const book = {
  img: "images/1.png",
  bookName: "Beyond Entrepreneurship",
  bookAuthor: "Author",
  time: "13 minute",
  reads: "",
};

it("should render the Book Card component", () => {
  render(<BookCard book={book} />);
  const card = screen.getByTestId(/bookCard/i);
  expect(card).toBeInTheDocument();
});

it("should contain the text given", () => {
  render(<BookCard book={book} />);
  const bookName = screen.queryByText(/Beyond Entrepreneurship/i);
  expect(bookName).toBeInTheDocument();
});

it("should contain the author name given", () => {
  render(<BookCard book={book} />);
  const bookAuthor = screen.queryByText(/Author/i);
  expect(bookAuthor).toBeInTheDocument();
});

it("should contain the time given", () => {
  render(<BookCard book={book} />);
  const time = screen.queryByText(/13 minute/i);
  expect(time).toBeInTheDocument();
});
