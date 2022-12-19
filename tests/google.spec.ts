import { test, expect} from '@playwright/test';
test('google', async ({ page }) => {

  await page.goto('https://www.google.com/', { timeout: 3000 });
  await page.getByRole('combobox', { name: 'ค้นหา' }).click();
  await page.getByRole('combobox', { name: 'ค้นหา' }).fill('playwright');
  await page.getByRole('combobox', { name: 'ค้นหา' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern ... https://playwright.dev' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();
});