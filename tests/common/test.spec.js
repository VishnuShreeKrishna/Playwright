import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // // @ts-check
  // import { test, expect } from '@playwright/test';

  // test('login test', async ({ page }) => {
  
  await page.goto("https://innopath.itdoseinfo.com:8089/login");
  await expect(page).toHaveURL('https://innopath.itdoseinfo.com:8089/login');
  await page.pause();

  await page.waitForLoadState("networkidle");
  await page.locator('[id="username"]').fill("Market-admin");
  await page.locator('[id="password"]').fill("Admin@123");

  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1000);
  console.log("logged in successfully");
  const logout = page.locator("[class= 'fas fa-sign-out-alt']");
  await expect('logout').toBevisible();
  console.log("logged out button is visible after login");
  await page.getByRole('link', { name: ' Registration' }).click();
  
  // select centre from dropdown
  await page.click('#react-select-5-input');
  await page.locator('#react-select-5-input').fill('5757');
  await page.locator('#react-select-5-input').press('ArrowDown');
  await page.locator('#react-select-5-input').press('Enter');

// select Ratetype from dropdown
  await page.locator('#react-select-6-input').first().click();
  await page.locator('#react-select-6-input').fill('5758');
  await page.locator('#react-select-6-input').press('ArrowDown');
  await page.locator('#react-select-6-input').press('Enter');


  
  await page.waitForLoadState("networkidle");
  // await page.locator('input[id="Mobile"]').click();
  await page.fill("input[id='Mobile']","9876543210");
  // await page.fill("input[id='Mobile']","9876543210");




  await page.locator('[class="fas fa-sign-out-alt"]').click();
  // Expect a title "to contain" a substring.

  await page.waitForLoadState("networkidle");
  // await page.waitForTimeout(1000);
  await page.close();
  console.log("logged out successfully");
});
