/*
Assertions
await expect(page).toHaveURL() -> Page has a URL
await expect(page).toHaveTitle() -> Page has a title
await expect(locator).toBeVisible() -> Element is visible


 */





import {test,expect} from '@playwright/test';

test ('test', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
})