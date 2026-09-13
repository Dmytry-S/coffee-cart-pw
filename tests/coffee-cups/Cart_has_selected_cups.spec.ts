import { test, expect } from '@playwright/test';

test('TC-006, Cart has selected cups', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Cafe_Latte"]').click();
  await page.locator('[data-test="Cafe_Breve"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('#app')).toContainText('Cafe Breve');
  await expect(page.locator('#app')).toContainText('Cafe Latte');
});