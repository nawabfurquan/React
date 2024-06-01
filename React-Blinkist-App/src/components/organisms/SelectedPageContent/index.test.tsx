import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SelectedPageContent from ".";

const MockPageContent = () => {
  return (
    <BrowserRouter>
      <SelectedPageContent />
    </BrowserRouter>
  );
};

it("should render Selected page component", () => {
  render(<MockPageContent />);
  const content = screen.getByTestId(/pageContent/i);
  expect(content).toBeInTheDocument();
});

it("should contain the banner", () => {
  render(<MockPageContent />);
  const content = screen.getByTestId(/banner/i);
  expect(content).toBeInTheDocument();
});

it("should contain the input field", () => {
  render(<MockPageContent />);
  const input = screen.getByAltText(/Search/i);
  expect(input).toBeInTheDocument();
});
