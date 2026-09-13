import { test, expect } from '@playwright/test';

test('TC-1003, Page Title is correct', async ({ page }) => {
  await page.goto('https://playwright.dev/python/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveTitle('Installation | Playwright Python')
});