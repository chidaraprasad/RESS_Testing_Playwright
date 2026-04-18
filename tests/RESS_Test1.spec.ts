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
  await page.getByRole('button').first().click();
  await page.getByText('System Administration').click();
  await page.getByRole('link', { name: 'Code Tables' }).click();
  await page.locator('tr:nth-child(7) > td:nth-child(4) > div > .usy-damas-core-bricks-list-context-menu-close > .usy-damas-core-bricks-list-context-menu-button').click();

  await page.getByRole('button', { name: 'Display' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Add new' }).click();
  const page1 = await page1Promise;
  await page1.waitForLoadState('networkidle');
  
  const AuctionName = `Auction_${Date.now()}`;

  await page1.getByRole('textbox', { name: 'Auction Name *' }).fill(AuctionName);
  await page1.getByRole('textbox', { name: 'Auction Description *' }).fill(AuctionName);
  await page1.pause();

  const date = new Date();

  const ApplicationSubmissionStart = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Application Submission Start *' }).fill(ApplicationSubmissionStart);
  
  date.setDate(date.getDate() + 1);
  const ApplicationSubmissionEnd = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Application Submission End *' }).fill(ApplicationSubmissionEnd);
  
  date.setDate(date.getDate() + 1);
  const ProvisionalQualification = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Provisional Qualification' }).fill(ProvisionalQualification);

  date.setDate(date.getDate() + 1);
  const ApplicationForReview = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Application for Review' }).fill(ApplicationForReview);

  date.setDate(date.getDate() + 1);
  const FinalWithdrawalDate = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Final Withdrawal Date *' }).fill(FinalWithdrawalDate);

  date.setDate(date.getDate() + 1);
  const FinalQualificationStatus = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Final Qualification Status' }).fill(FinalQualificationStatus);

  date.setDate(date.getDate() + 1);
  const AuctionSubmissionStart = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Auction Submission Start *' }).fill(AuctionSubmissionStart);

  date.setDate(date.getDate() + 1);
  const AuctionSubmissionDeadline = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Auction Submission Deadline *' }).fill(AuctionSubmissionDeadline);

  date.setDate(date.getDate() + 1);
  const PreliminaryResults = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Preliminary Results' }).fill(PreliminaryResults);

  date.setDate(date.getDate() + 1);
  const FinalResultsPublication = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Final Results Publication *' }).fill(FinalResultsPublication);

  date.setDate(date.getDate() + 1);
  const AuctionSiteLastAvailable = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Auction Site Last Available *' }).fill(AuctionSiteLastAvailable);

  await page1.getByRole('textbox', { name: 'Deemed Offer Price Limiter *' }).fill('200');
  await page1.getByRole('textbox', { name: 'Maximum Offer Price Limiter *' }).fill('11');
  await page1.getByRole('textbox', { name: 'Bid Bond Amount Due (€/MWh ) *' }).fill('11');

  await page1.getByRole('textbox', { name: 'Valid From *' }).fill(ApplicationSubmissionStart);

  date.setDate(date.getDate() + 1);
  const ValidTo = date.toLocaleDateString('en-GB').replace(/\//g, '/');
  await page1.getByRole('textbox', { name: 'Valid To *' }).fill(ValidTo);

  await page1.getByRole('textbox', { name: 'Auction Name *' }).fill(AuctionName);
  await page1.getByRole('textbox', { name: 'Auction Description *' }).fill(AuctionName);
  await page1.pause();

  await page1.getByRole('button', { name: 'Save' }).click();

  await page1.screenshot({ path: 'AuctionDate.png' });
await page1.getByRole('textbox', { name: 'Auction Description *' }).fill(AuctionName);
  await page1.getByRole('button', { name: 'Save' }).click();
await page1.pause();
  await page1.getByRole('cell', { name: 'Code table item created' }).click();
  await page1.getByText('MessageStatusCode table item created successfully.OK').click();
  await page1.getByRole('button', { name: 'OK' }).click();
  await page1.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();
  await page1.getByRole('textbox', { name: 'Auction Name contains' }).fill(AuctionName);
  await page1.getByRole('button', { name: 'Apply' }).click();
  await page1.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();
  await page1.pause
  const cellValue = await page1.locator('table tbody tr:first-child td:first-child').innerText();
  console.log(cellValue);
  expect(cellValue).toEqual(AuctionName);
  await page1.screenshot({ path: 'TableData.png' });
  await page1.close();
  await page.getByRole('button', { name: ' Rajendra Prasad Chidara ' }).click();
  await page.getByText('Logout').click();
  await page.close

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

  await page.getByRole('button', { name: 'Show Data' }).click();

  await page.locator('.uu5-bricks-button.uu5-bricks-button-s').first().click();

  await page.getByRole('textbox', { name: 'Application Reference' }).fill(AuctionName);
  await page.getByRole('button', { name: 'Apply' }).click();
  
  await page.getByRole('button', { name: 'Create New' }).click();
  await page.getByText('- Select some item -').click();
  await page.getByRole('combobox').fill(AuctionName);
  await page.getByRole('combobox').press('Enter');

  await page.pause

});