import { screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import { renderPage } from "../utils/renderPage";
import Home from "@/app/page";

test("render the Homepage", async () => {
  renderPage(<Home />);
  expect(
    screen.getByRole("heading", {
      name: /Unleashing Creativity: Powered by Generative AI/i,
    }),
  ).toBeVisible();
  expect(
    screen.getByText("Announcing our next round of funding."),
  ).toBeVisible();
  expect(
    screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend tempor nisi, eget suscipit ante elementum ac. Praesent euismod arcu lacus, sit amet mollis libero egestas vel.",
    ),
  ).toBeVisible();
  expect(screen.getByRole("link", { name: /read more/i })).toBeVisible();
  expect(screen.getByRole("link", { name: /get started/i })).toBeVisible();
  expect(screen.getByRole("link", { name: /learn more/i })).toBeVisible();
  expect(screen.getByRole("link", { name: /log in/i })).toBeVisible();
  expect(screen.getByTestId("Product-desktop")).toBeVisible();
  expect(screen.getByTestId("Features-desktop")).toBeVisible();
  expect(screen.getByTestId("Marketplace-desktop")).toBeVisible();
  expect(screen.getByTestId("Company-desktop")).toBeVisible();
});
