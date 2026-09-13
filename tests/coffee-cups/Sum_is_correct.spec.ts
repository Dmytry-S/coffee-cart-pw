import { test, expect } from '@playwright/test';

test('TC-003, Sum is correct', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page.locator('#app')).toContainText('Espresso Macchiato $12.00');
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await expect(page.locator('#app')).toContainText('Cappuccino $19.00');
  await page.locator('[data-test="Cappuccino"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $31.00');
});