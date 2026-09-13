import { test, expect } from '@playwright/test';

test('TC-002, Cart is empty', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
});
