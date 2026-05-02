import { test, expect } from '@playwright/test';
import { assert } from 'node:console';

const RESS_Unicorn_URL = "https://ress-test2.eirgrid.com";
const RESS_Default_Password = "Eirgrid123!"; 
const RESS_Unicorn_Internal_USERNAME = "rajendra.chidera@eirgrid.com";
const RESS_Unicorn_Internal_PASSWORD = "Smartops@903";

test('test', async ({ page }) => {
  await page.goto(RESS_Unicorn_URL);
  await page.getByRole('button', { name: 'Registration' }).click();
  const FirstName = Math.random().toString(36).substring(2, 8);
  console.log(`Generated First Name: ${FirstName}`);
  const LastName = Math.random().toString(36).substring(2, 8);
  console.log(`Generated Last Name: ${LastName}`);
  const EmailID = `${FirstName}.${LastName}@tester.com`;
  console.log(`Generated Email ID: ${EmailID}`);
  await page.getByRole('textbox', { name: 'First Name *' }).fill(FirstName);
  await page.getByRole('textbox', { name: 'Last Name *' }).fill(LastName);
  await page.getByRole('textbox', { name: 'Phone *' }).fill('+421999888999');
  await page.getByRole('textbox', { name: 'Email *' }).fill(EmailID);
  await page.getByRole('textbox', { name: 'New Password *', exact: true }).fill(RESS_Default_Password);
  await page.getByRole('textbox', { name: 'Confirm New Password *' }).fill(RESS_Default_Password);
  await page.pause
  await page.setInputFiles('//div[@name="additionalDocuments"]//input', 'C:\\Users\\r.chidara\\playwright-test\\TestDocument.pdf');
  await page.pause
  await page.getByRole('button', { name: 'Register' }).click();
  assert(await page.getByText('You have been registered').isVisible(), 'Registration confirmation message is not visible');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('textbox', { name: 'Username *' }).fill(RESS_Unicorn_Internal_USERNAME);
  await page.getByRole('textbox', { name: 'Password *' }).fill(RESS_Unicorn_Internal_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Passcode *' }).fill('408723');
  await page.pause();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button').first().click();
  await page.getByText('User Account Settings').click();
  await page.getByRole('link', { name: 'Users' }).click();
  await page.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();
  await page.getByRole('textbox', { name: 'E-mail contains specific text:' }).fill(EmailID);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForLoadState('networkidle');
  await page.pause();
  //a[@class='uu5-bricks-link']

  console.log(await page.locator('table tbody tr:first-child td:first-child').textContent);

  await expect(
  page.locator('table tbody tr:first-child td:first-child')
  ).toHaveText(EmailID);

  
});