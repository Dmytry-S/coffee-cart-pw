import { test, expect } from '@playwright/test';

test('TC-1001, Light-Dark mode changing', async ({ page }) => {
  await page.goto('https://playwright.dev/python/');
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toHaveAttribute('title','light mode');
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toHaveAttribute('title','dark mode');
});