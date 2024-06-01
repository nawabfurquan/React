import { render, screen } from "@testing-library/react";
import NavButton from ".";

it("should render the Nav Button component", () => {
  render(<NavButton children="Nav Button" textVariant="h2" />);
  const navButton = screen.getByRole("button");
  expect(navButton).toBeInTheDocument();
});

it("should contain the text given", () => {
  render(<NavButton children="Nav Button" textVariant="h2" />);
  const navButton = screen.queryByText(/Nav Button/i);
  expect(navButton).toBeInTheDocument();
});
