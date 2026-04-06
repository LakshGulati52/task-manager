import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Task Manager heading", () => {
  render(<App />);
  const element = screen.getByText(/task manager/i);
  expect(element).toBeInTheDocument();
});