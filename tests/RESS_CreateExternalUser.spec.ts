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
  await page.getByText('User Account Settings').click();

  assert(await page.getByRole('link', { name: 'Password Change' }).isVisible(), 'Password Change link is not visible');
  assert(await page.getByRole('link', { name: 'User Rights Settings' }).isVisible(), 'User Rights Settings link is not visible');
  assert(await page.getByRole('link', { name: 'Users' }).isVisible(), 'Users link is not visible');

  await page.getByRole('link', { name: 'Users' }).click();
  await page.waitForLoadState('networkidle');
  await page.pause();
  assert(await page.getByRole('button', { name: 'Create New User' }).isVisible(), 'Create New User button is not visible');

  await page.getByRole('button', { name: 'Create New User' }).click();
  await page.getByText('- Select some item -').click();
  await page.getByText('RESS External User Roles').click();
 
  await page.getByRole('textbox', { name: 'First Name *' }).fill('TestFirstName');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('TestLastName'); 
  await page.getByRole('textbox', { name: 'Phone *' }).fill('+421999888777');
  await page.getByRole('textbox', { name: 'E-mail *' }).fill('tester@tester.com');
  await page.getByText('- Select some item -').click();
  await page.getByText('RESS Auction Platform Admin User', { exact: true }).click();
  await page.getByText('- Select some item -').click();
  await page.getByText('Select All').click();
  await page.getByRole('textbox', { name: 'New Password *', exact: true }).fill(RESS_Default_Password);
  await page.getByRole('textbox', { name: 'Confirm New password *' }).fill(RESS_Default_Password);
  await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForLoadState('networkidle');
    await page.pause();
  assert(await page.getByRole('cell', { name: 'User created successfully.' }).isVisible(), 'User created successfully message is not visible');
  await page.getByRole('button', { name: 'OK' }).click();

  await page.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();
  await page.getByRole('textbox', { name: 'E-mail contains specific text:' }).fill('tester@tester.com');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();
  assert(await page.getByText('Password expired').isVisible(), 'Password expired status is not visible');

  await page.locator('.usy-damas-core-bricks-list-context-menu-button').click();
  await page.getByRole('button', { name: 'Detail' }).click();

  await page.waitForLoadState('networkidle');
  await page.pause();

  /*

  assert(await page.getByRole('textbox', { name: 'First Name' }).inputValue() === 'TestFirstName', 'First Name does not match');
  assert(await page.getByRole('textbox', { name: 'Last Name' }).inputValue() === 'TestLastName', 'Last Name does not match');
  assert(await page.getByRole('textbox', { name: 'Phone' }).inputValue() === '+421999888777', 'Phone does not match');
  assert(await page.getByRole('textbox', { name: 'E-mail' }).inputValue() === 'tester@tester.com', 'E-mail does not match');
  assert(await page.getByRole('textbox', { name: 'User Role' }).inputValue() === 'RESS Auction Platform Admin User', 'User Role does not match');

  */

  await page.getByRole('button').first().click();
  await page.getByText('User Account Settings').click();
  await page.getByRole('link', { name: 'Users' }).click();
  
  await page.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();


  await page.getByRole('textbox', { name: 'E-mail contains specific text:' }).fill('tester@tester.com');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();
  await page.locator('.usy-damas-core-bricks-list-context-menu-button').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByText('Are you sure to delete this').click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('cell', { name: 'User deleted' }).click();
  await page.waitForLoadState('networkidle');
  await page.pause();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator("//span[@class='uu5-bricks-icon mdi mdi-chevron-down']").click();
  await page.getByText('Logout').click();
});
