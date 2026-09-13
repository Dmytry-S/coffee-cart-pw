import { test, expect } from '@playwright/test';

test('TC-005, Extra cup proposition is present', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="Americano"]').click();
  await expect(page.locator('#app')).toContainText('It\'s your lucky day! Get an extra cup of Mocha for $4.');
});