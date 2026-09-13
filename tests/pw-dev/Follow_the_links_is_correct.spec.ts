import { test, expect } from '@playwright/test';

test('TC-1002, Follow the links is correct', async ({ page }) => {
  await page.goto('https://playwright.dev/python/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL('https://playwright.dev/python/docs/intro')
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await expect(page).toHaveURL('https://playwright.dev/python/docs/api/class-playwright')
  await page.getByRole('link', { name: 'Community' }).click();
  await expect(page).toHaveURL('https://playwright.dev/python/community/welcome')
});
