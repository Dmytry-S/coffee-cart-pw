import { test, expect } from '@playwright/test';

test('TC-001, Add product to cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await expect(page.locator('#app')).toContainText('Espresso Macchiato');
});
