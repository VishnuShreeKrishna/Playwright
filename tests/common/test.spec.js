import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // // @ts-check
  // import { test, expect } from '@playwright/test';

  // test('login test', async ({ page }) => {
  
  await page.goto("https://lims-alpha.elabpro.in/login");
  await expect(page).toHaveURL('https://lims-alpha.elabpro.in/login');
  await page.pause();

  await page.waitForLoadState("networkidle");
  await page.locator('[id="username"]').fill("Market-admin");
  await page.locator('[id="password"]').fill("Marketing@123");

  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1000);
  console.log("logged in successfully");
  await page.getByRole('link', { name: ' Registration' }).click();
  await page.locator('[class="fas fa-sign-out-alt"]').click();
  // Expect a title "to contain" a substring.

  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1000);

  console.log("logged out successfully");
});
