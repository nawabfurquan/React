import { render, screen } from "@testing-library/react";
import FilledButton from ".";

it("should render the Filled Button", () => {
  render(<FilledButton />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

it("should contain the label text given", () => {
  render(<FilledButton textVariant="h2" children="Button" />);
  const button = screen.getByText("Button");
  expect(button).toBeInTheDocument();
});
