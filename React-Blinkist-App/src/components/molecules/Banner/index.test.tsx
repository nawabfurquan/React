import { render, screen } from "@testing-library/react";
import Banner from ".";

it("should render the Banner component", () => {
  render(<Banner />);
  const banner = screen.getByTestId(/banner/i);
  expect(banner).toBeInTheDocument();
});

it("should contain the image", () => {
  render(<Banner />);
  const image = screen.getByAltText(/banner/i);
  expect(image).toBeInTheDocument();
});

it("should have the title", () => {
  render(<Banner />);
  const title = screen.getByText(/Explore Books on entrepreneurship/i);
  expect(title).toBeInTheDocument();
});
