import { test, expect, Browser, chromium, Page } from '@playwright/test';
import { assert } from 'node:console';
import * as dotenv from 'dotenv';
dotenv.config();

const RESS_Unicorn_URL = "https://ress-test2.eirgrid.com";
const RESS_Unicorn_Internal_USERNAME = "rajendra.chidera@eirgrid.com";
const RESS_Unicorn_Internal_PASSWORD = "Smartops@903";
const RESS_Default_Password = "Eirgrid123!"; 

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
  
  await page.getByRole('button').first().click();
  await page.getByRole('link', { name: 'Code Tables' }).click();
  await page.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();
  await page.getByText('- Select -').click();
  await page.getByRole('combobox').fill('RESS');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('textbox', { name: 'Name contains specific text:' }).fill('RESS Projects');
  await page.getByRole('textbox', { name: 'Name contains specific text:' }).press('Enter');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('.usy-damas-core-bricks-list-context-menu-button').click();
  await page.getByRole('button', { name: 'Display' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Add new' }).click();
  const page1 = await page1Promise;
  const EligibleTechnologyName = `Technology_${Date.now()}`;
  await page1.getByRole('textbox', { name: 'Eligible Technology Name *' }).fill(EligibleTechnologyName);
  await page1.getByRole('textbox', { name: 'Renewable Capacity Factor (%) *' }).fill('100');
  await page1.getByRole('textbox', { name: 'Renewable Capacity Factor MIN' }).fill('10');
  await page1.getByRole('textbox', { name: 'Renewable Capacity Factor MAX' }).fill('25');
  await page1.getByRole('textbox', { name: 'Evaluation Correction Factor *' }).fill('10');
  await page1.getByRole('textbox', { name: 'Evaluation Correction Factor MIN value *' }).fill('10');
  await page1.getByRole('textbox', { name: 'Evaluation Correction Factor MAX value *' }).fill('30');
  await page1.getByRole('textbox', { name: 'Bid Bond Correction Factor *' }).fill('10');
  await page1.getByRole('textbox', { name: 'Evaluation Correction Factor MAX value *' }).fill('10');
  await page1.getByRole('textbox', { name: 'Maximum Offer Price' }).fill('200');
  const date = new Date();
  const ValidFrom = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Valid From *' }).fill(ValidFrom);
  await page1.getByRole('textbox', { name: 'Valid To *' }).fill(ValidFrom);
  await page1.getByRole('button', { name: 'Save' }).click();
  assert(await page1.getByRole('cell', { name: 'Code table item created' }).isVisible(), 'Code table item created message is not visible');
  await page1.getByRole('button', { name: 'OK' }).click();
  await page1.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();

  await page1.getByRole('textbox', { name: 'Eligible Technology Name' }).fill(EligibleTechnologyName);
  await page1.getByRole('button', { name: 'Apply' }).click();
  await page1.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();
  await page.getByRole('button', { name: ' Rajendra Prasad Chidara ' }).click();
  await page.getByText('Logout').click();
});
