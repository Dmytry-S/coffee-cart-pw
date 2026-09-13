import { test, expect } from '@playwright/test';

test('TC-004, Success message is present', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('SD');
  await page.getByRole('textbox', { name: 'Email' }).fill('ref@data.co');
  await page.getByRole('checkbox', { name: 'Promotion checkbox' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
});
