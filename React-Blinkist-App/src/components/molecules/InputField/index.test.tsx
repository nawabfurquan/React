import { render, screen } from "@testing-library/react";
import InputField from ".";

it("should render the Input component", () => {
  render(<InputField text="Enter text" />);
  const input = screen.getByTestId(/input/i);
  expect(input).toBeInTheDocument();
});

it("should contain the given label text", () => {
  render(<InputField text="Enter text" />);
  const input = screen.getByText(/Enter text/i);
  expect(input).toBeInTheDocument();
});
