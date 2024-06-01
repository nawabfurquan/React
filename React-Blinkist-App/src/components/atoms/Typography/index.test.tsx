import { render, screen } from "@testing-library/react";
import TypographyComponent from ".";

it("should render Typography", () => {
  render(<TypographyComponent variant="h1" children="Heading" />);
  const typography = screen.getByTestId(/typography/i);
  expect(typography).toBeInTheDocument();
});

it("should have the given text displayed", () => {
  render(<TypographyComponent variant="h1" children="Heading" />);
  const typography = screen.getByTestId(/typography/i);
  expect(typography.textContent).toBe("Heading");
});
