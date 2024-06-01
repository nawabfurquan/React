import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render the App component", () => {
  render(<App />);
  const AppComponent = screen.getByTestId(/app/i);
  expect(AppComponent).toBeInTheDocument();
});
