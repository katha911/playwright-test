import { test, expect} from '@playwright/test';
test('google', async ({ page }) => {

  await page.goto('https://www.google.com');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern ... https://playwright.dev' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
});