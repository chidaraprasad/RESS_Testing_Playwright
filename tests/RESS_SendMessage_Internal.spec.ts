import { test, expect, Browser, chromium, Page } from '@playwright/test';
import { assert } from 'node:console';
import * as dotenv from 'dotenv';
dotenv.config();

const RESS_Unicorn_URL = "https://ress-test2.eirgrid.com";
const RESS_Unicorn_Internal_USERNAME = "rajendra.chidera@eirgrid.com";
const RESS_Unicorn_Internal_PASSWORD = "Smartops@903";
const RESS_Unicorn_External_USERNAME = "r.chidara@accenture.com";
const RESS_Unicorn_External_PASSWORD = "Smartops@903";


test('RESS_Test1', async () => { 

  const browser:Browser = await chromium.launch({ headless: false });
  const page:Page = await browser.newPage();  

  await page.goto(RESS_Unicorn_URL);
  
  await page.waitForLoadState('networkidle');

  await page.getByRole('textbox', { name: 'Username *' }).fill(RESS_Unicorn_Internal_USERNAME);
  await page.getByRole('textbox', { name: 'Password *' }).fill(RESS_Unicorn_Internal_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'Passcode *' }).fill('918763');
  await page.pause();
  await page.getByRole('button', { name: 'Confirm' }).click();

  await page.getByRole('button').nth(2).click();
  
  await page.getByRole('button', { name: ' Send Message' }).click();

  const dropdown = page.locator(
    'div.usy-damas-core-forms-select',
    { hasText: 'Entity' }
  );

await dropdown.locator('.Select-control').click();
await page.getByText('RESS Internal User Roles').click();

await page.getByRole('textbox').nth(1).fill('Test Message Playwright Automation');
  await page.getByRole('button', { name: 'Send', exact: true }).click();
  await page.getByText('SendCancel').click();
  await page.getByText('Your message was successfully').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button').nth(2).click();
  await page.locator('.color-schema-custom.uu5-bricks-button.uu5-forms-checkbox-button').first().click();
  await page.getByText('Test Message Playwright').click();
  await page.getByRole('button', { name: 'Delete Selected' }).click();
  await page.getByText('Delete selected messages').click();
  await page.getByRole('button', { name: 'Yes' }).click();

await page.locator("//span[@class='uu5-bricks-icon mdi mdi-chevron-down']").click();
  await page.getByText('Logout').click();
  await page.close
});