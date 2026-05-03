import { test, expect } from '@playwright/test'

test('app loads and shows the header', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.greetings h1')).toHaveText('ALTTPR Prize Pack Tracker')
})
