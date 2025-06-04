import { test, expect } from '@playwright/test';
import { time } from 'console';
import { url } from 'inspector';


test('Student Login', async({page}) =>
{

await page.goto('https://cambrilearn.staging.mytopdog.co.za/');


await expect(page).toHaveTitle(/CambriLearn/);

await page.getByRole('button', { name: 'Accept All Cookies' }).click();

await expect(page.getByRole('Link',{name: 'LOG IN'})).toBeVisible();

await page.getByRole('Link', { name: 'LOG IN' }).click();

await expect(page).toHaveURL('https://cambrilearn.staging.mytopdog.co.za/users/login');
await expect (page.locator('#user_username')).toBeVisible();
//{ timeout: 5000 }
await page.locator('#user_username').fill('dilawar.khan+21march@cambrilearn.com	');

await page.locator('#user_password').fill('11221122');
await page.getByRole('button',{name:'LOG IN'}).click();
await page.waitForTimeout(5000);
});

