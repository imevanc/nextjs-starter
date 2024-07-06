import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/Next.js starter/);
});

test("has all the accessible elements", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(
    page.getByRole("heading", { name: /Welcome to the Next.js starter/i }),
  ).toBeVisible();

  await expect(page.getByRole("button", { name: /Button 1/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Button 2/ })).toBeVisible();
});