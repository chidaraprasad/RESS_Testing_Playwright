import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ress-test2.eirgrid.com');

  await page.waitForLoadState('networkidle');
  
  const titleName = await page.title();
  
  console.log(titleName);

  await page.getByRole('textbox', { name: 'Username *' }).fill('rajendra.chidera@eirgrid.com');
  
  await page.getByRole('textbox', { name: 'Password *' }).fill('Smartops@903');

  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByRole('textbox', { name: 'Passcode *' }).fill('413348');
  
  await page.getByRole('button', { name: 'Confirm' }).click();
  
  await page.waitForLoadState('networkidle');
  
  await page.getByRole('button').first().click();
  
  await page.getByText('User Account Settings').click();
  
  await page.getByRole('link', { name: 'Users' }).click();
  
  await page.getByRole('button', { name: 'Create New User' }).click();
});
