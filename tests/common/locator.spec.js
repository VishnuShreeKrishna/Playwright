import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    //    const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext();
//   const page = await context.newPage();

  try {
    // Navigate to login page
    await page.goto('https://innopath.itdoseinfo.com:8089/login', {
      waitUntil: 'networkidle'
    });
    await page.pause();

    // Login process
    await page.fill('input[name="username"], input[type="text"]', 'Market-admin');
    await page.fill('input[name="password"], input[type="password"]', 'Admin@123');
    await page.click('button[type="submit"], button:has-text("Login"), input[type="submit"]');

    // Wait for dashboard/home page after login
    await page.waitForLoadState('networkidle');
    console.log('Login successful');

    // Example: Navigate to registration page/module
    // Update selectors and URLs based on actual application structure
    await page.click('a:has-text("Registration"), a:has-text("Patient Registration"), button:has-text("Registration")');
    await page.waitForLoadState('networkidle');

    // Fill registration form (example fields - adjust as per actual form)
    await page.fill('input[name="patientName"], input[placeholder*="Name"]', 'Test Patient');
    await page.fill('input[name="mobile"], input[placeholder*="Mobile"]', '9876543210');
    await page.fill('input[name="age"], input[placeholder*="Age"]', '30');

    // Gender selection example
    const genderSelector = page.locator('select[name="gender"]');
    if (await genderSelector.count() > 0) {
      await genderSelector.selectOption({ label: 'Male' });
    }

    // Submit registration
    await page.click('button:has-text("Save"), button:has-text("Submit"), input[type="submit"]');

    await page.waitForLoadState('networkidle');
    console.log('Registration completed successfully');

    // Optional screenshot
    await page.screenshot({ path: 'registration-success.png', fullPage: true });

  } catch (error) {
    console.error('Automation failed:', error);
    await page.screenshot({ path: 'error-screenshot.png', fullPage: true });
  } finally {
    // Keep browser open for review, close manually if needed
    // await browser.close();
  }
});








