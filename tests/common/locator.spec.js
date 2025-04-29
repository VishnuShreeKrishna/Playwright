/* 
These are the recommended built-in locators.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByPlaceholder() to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import { test, expect } from '@playwright/test';

test('test', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForLoadState('networkidle');
    // await page.pause();

    // page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    // page.getByPlaceholder() to locate an input by placeholder.
    const Username = await page.getByPlaceholder('Username').fill("Admin");
    const Password = await page.getByPlaceholder('Password').fill("admin123")
    await page.waitForTimeout(2000);
    // page.getByRole() to locate by explicit and implicit accessibility attributes
    const LoginButton = await page.getByRole('button', {type: 'submit'}).click();

    // page.getByText() to locate by text content.
    const adminname = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(adminname)).toBeVisible();

    // page.getByLabel() to locate a form control by associated label's text.
    
})








