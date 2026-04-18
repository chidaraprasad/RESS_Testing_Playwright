import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test';
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

  await page.getByRole('textbox', { name: 'Username *' }).fill(RESS_Unicorn_External_USERNAME);
  await page.getByRole('textbox', { name: 'Password *' }).fill(RESS_Unicorn_External_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'Passcode *' }).fill('918763');
  await page.pause();
  await page.getByRole('button', { name: 'Confirm' }).click();

  await page.getByRole('button').first().click();

  await page.getByText('RESS Module').click();

  await page.getByRole('link', { name: 'Application List' }).click();

  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: 'Show Data' }).click();

  await page.waitForLoadState('networkidle');

  // await page.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();

  // await page.getByRole('textbox', { name: 'Application Reference' }).fill('Auction_1776434645027');
  // await page.getByRole('button', { name: 'Apply' }).click();
  
  await page.getByRole('button', { name: 'Create New' }).click();
  await page.getByText('- Select some item -').click();
  await page.getByRole('combobox').fill('Auction_1776419881207');
  await page.getByRole('combobox').press('Enter');

  await page.pause();

  await page.waitForLoadState('networkidle');

  // Pre-filling the application form with Project Details
  await page.locator('#react-select-10--value').getByText('- Select some item -').click();
  await page.locator('#react-select-10--value').getByRole('combobox').fill('April Wind Farm');
  await page.locator('#react-select-10--value').getByRole('combobox').press('Enter');
  
  await page.getByRole('textbox', { name: 'Company Email Address: *' }).fill('test@tester.com');
  await page.locator('//div[@name="postMatch"]//button').click();
  await page.locator('//div[@name="agreementDccae"]//button').click();

  await page.getByRole('textbox', { name: 'Applicant Address Line 1: *' }).fill('1234 Tester Lane');
  
  await page.locator('#react-select-11--value').getByText('- Select some item -').click();
  await page.locator('#react-select-11--value').getByRole('combobox').fill('Albania');
  await page.locator('#react-select-11--value').getByRole('combobox').press('Enter');
  
  await page.getByRole('textbox', { name: 'Applicant Address Eircode/' }).fill('75346');

  // Pre-filling the application form with Entity Details

  await page.getByRole('button', { name: 'Entity Details' }).click();
  
  await page.getByRole('textbox', { name: 'Entity 1 - Name: *' }).fill('Test Entity');
  await page.locator('#react-select-14--value').getByText('- Select some item -').click();
  await page.getByText('Entity to which applicant has').click();
  
  await page.getByRole('textbox', { name: 'Entity 1 - Address Line 1: *' }).fill('2341 Tester Address 1');
    
  await page.locator('#react-select-15--value').getByText('- Select some item -').click();
  await page.locator('#react-select-15--value').getByRole('combobox').fill('Albania');
  await page.locator('#react-select-15--value').getByRole('combobox').press('Enter');
  
  await page.getByRole('textbox', { name: 'Entity 1 - Address Eircode/' }).fill('2635E');

  // Pre-filling the application form with Preferences Details

  await page.getByRole('button', { name: 'Preferences' }).click();
  await page.locator('#react-select-17--value').getByText('- Select some item -').click();
  await page.locator('#react-select-17--value').getByRole('combobox').fill('Biogas HECHP');
  await page.locator('#react-select-17--value').getByRole('combobox').press('Enter');

  await page.pause();
  await page.locator('//div[@name="confirmConditions"]//button').click();
  await page.locator('//div[@name="confirmRespects"]//button').click();
  await page.locator('//div[@name="confirmAckPurposes"]//button').click();
  await page.locator('//div[@name="confirmAckApplication"]//button').click();
  await page.locator('//div[@name="confirmAckCondition"]//button').click();
  await page.locator('//div[@name="confirmGuarantee"]//button').click();
  
await page.pause();  
  await page.getByRole('textbox', { name: 'Offer Quantity (MW): *' }).fill('10');
  await page.getByRole('textbox', { name: 'Maximum Export Capacity of' }).fill('22');
  await page.getByRole('textbox', { name: 'ITM Site Easting: *' }).fill('100');
  await page.getByRole('textbox', { name: 'ITM Site Northing: *' }).fill('200');
  await page.getByText('- Select some item -').click();
  await page.locator('#react-select-18--value').getByRole('combobox').fill('Antrim');
  await page.locator('#react-select-18--value').getByRole('combobox').press('Enter');
 
  await page.getByText('Eligible Technology:Biogas HECHP×Wo - Wind Capacity Portion (MW):So - Solar').click();

  // Pre-filling the application form with Compliance Details

  await page.getByRole('button', { name: 'Compliance' }).click();
  await page.locator('[id="226a408fb3e9c45b3af802a766c9b75e-input"]').click();
  await page.locator('[id="226a408fb3e9c45b3af802a766c9b75e-input"]').setInputFiles('TestDocument.pdf');
  await page.getByText('Confirmation of Compliance with New Project Requirements').click();
  await page.locator('[id="79660150d48c44f008375651f5cc1507-inner"]').click();
  await page.locator('[id="001927a1fde894605a815921ab49398d-inner"]').click();
  await page.locator('#afc60507604e740faa6fe3ab3f3fbde9-inner').click();
  await page.locator('#f51cb783bf5804e20963548f15835a4d-input').click();
  await page.locator('#f51cb783bf5804e20963548f15835a4d-input').setInputFiles('TestDocument.pdf');
  await page.locator('[id="7746294d2830a491cb0d7997249437c7-inner"]').click();
  await page.locator('#bf081b31e32e24372a0b41fe453317e1-inner').click();
  await page.locator('[id="21626c554ed9343e9b7233e4b4f7226f-input"]').click();
  await page.locator('[id="21626c554ed9343e9b7233e4b4f7226f-input"]').setInputFiles('TestDocument.pdf');
  await page.getByRole('textbox', { name: 'Planning Reference Number *' }).click();
  await page.getByRole('textbox', { name: 'Planning Reference Number *' }).fill('Test12553');
  await page.locator('[id="18649e8b281cb4c5598418dcd38ac354-inner"]').click();
  await page.locator('[id="50a1a40c86c52495eb6faebf3e37cef2-input"]').click();
  await page.locator('[id="50a1a40c86c52495eb6faebf3e37cef2-input"]').setInputFiles('TestDocument.pdf');
  await page.locator('[id="6e81285aa59ec440fa77b3066f721e3d-input"]').click();
  await page.locator('[id="6e81285aa59ec440fa77b3066f721e3d-input"]').setInputFiles('TestDocument.pdf');
  await page.locator('#e8b50b6418523414d9a4d431f0623ce6-inner').click();
  
  // Pre-filling the application form with Offer Price Details

  await page.getByRole('button', { name: 'Offer Price' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  assert(page.getByText('Your application has been').isVisible());
  await page.getByRole('button', { name: 'OK' }).click();
  

});