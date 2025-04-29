/*
Assertions
await expect(page).toHaveURL() -> Page has a URL
await expect(page).toHaveTitle() -> Page has a title
await expect(locator).toBeVisible() -> Element is visible
await expect(locator).toBeEnabled() -> Element is enabled
await expect(locator).toBeDisabled() -> Element is disabled

 */

import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://178.16.143.20:5000/");
  await page.pause();
  await page.waitForLoadState("networkidle");

  // await expect(page).toHaveURL() -> Page has a URL
  await expect(page).toHaveURL('http://178.16.143.20:5000/')

  await expect(page).toHaveTitle('Giloys')
  await page.waitForLoadState('networkidle')
  await page.getByRole("link", { name: "Login" }).click();
  await page.waitForLoadState("networkidle");
  await page.locator('[id="username"]').fill("vishnu.sharmaitdoseinfo.com");
  await page.locator('[id="password"]').fill("Vishnu@123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(5000);
});
