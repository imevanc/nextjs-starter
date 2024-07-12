import { fireEvent, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import Home from "@/app/page";
import { renderPage } from "../utils/renderPage";

test("render the Homepage", async () => {
  renderPage(<Home />);
  const mockedConsoleLog = jest.spyOn(console, "log").mockImplementation();

  expect(screen.getByRole("button", { name: /button 1/i })).toBeVisible();
  expect(screen.getByRole("button", { name: /button 2/i })).toBeVisible();
  expect(
    screen.getByRole("heading", { name: /welcome to the next.js starter/i }),
  ).toBeVisible();
  expect(screen.getByRole("heading", { level: 1 })).toBeVisible();

  fireEvent.click(screen.getByRole("button", { name: /button 2/i }));
  expect(mockedConsoleLog).toHaveBeenCalled();
  fireEvent.click(screen.getByRole("button", { name: /button 1/i }));
  expect(mockedConsoleLog).toHaveBeenCalled();

  mockedConsoleLog.mockRestore();
});
