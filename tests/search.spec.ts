import { test, expect } from '@playwright/test';

// test('google search', async ({ page }) => {
//     await page.goto('https://www.google.com/');
//     await page.getByRole('combobox', { name: 'ค้นหา' }).click();
//     await page.getByRole('combobox', { name: 'ค้นหา' }).fill('youtube');
//     await page.getByRole('combobox', { name: 'ค้นหา' }).press('Enter');
//     await page.getByRole('link', { name: 'YouTube https://www.youtube.com › ...' }).click();
// });
test('youtube search', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.locator('#search-form #container').click();
    await page.getByPlaceholder('Search').fill('love youself');
    await page.getByPlaceholder('Search').press('Enter');
    await page.getByRole('link', { name: 'Justin Bieber - Love Yourself (PURPOSE : The Movement)' }).click();
    
    
});