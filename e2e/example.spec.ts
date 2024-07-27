import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://nextjs-starter-delta-one.vercel.app/");

  await expect(page).toHaveTitle(/Next.js starter/);
});

test("has all the accessible elements", async ({ page }) => {
  await page.goto("https://nextjs-starter-delta-one.vercel.app/");

  await expect(
    page.getByRole("heading", {
      name: /Unleashing Creativity: Powered by Generative AI/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByText("Announcing our next round of funding."),
  ).toBeVisible();
  await expect(
    page.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend tempor nisi, eget suscipit ante elementum ac. Praesent euismod arcu lacus, sit amet mollis libero egestas vel.",
    ),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /read more/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /get started/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /learn more/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /log in/i })).toBeVisible();
  await expect(page.getByTestId("Product-desktop")).toBeVisible();
  await expect(page.getByTestId("Features-desktop")).toBeVisible();
  await expect(page.getByTestId("Marketplace-desktop")).toBeVisible();
  await expect(page.getByTestId("Company-desktop")).toBeVisible();
});
