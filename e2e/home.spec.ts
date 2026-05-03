import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test('shows the changelog', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#changelog h2')).toHaveText('Changelog')
    await expect(page.locator('#changelog h3').first()).toBeVisible()
    await expect(page.locator('#changelog li').first()).toBeVisible()
  })

  test('navigation shows all four links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(page.locator('nav a', { hasText: 'Track Random' })).toBeVisible()
    await expect(page.locator('nav a', { hasText: 'Track Vanilla' })).toBeVisible()
  })

  test('navigates to About page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL('/about')
    await expect(page.locator('#about h2').first()).toHaveText('Contact')
    await expect(page.locator('#about h2').nth(1)).toHaveText('Credits')
  })

  test('navigates back to Home from About', async ({ page }) => {
    await page.goto('/about')
    await page.getByRole('link', { name: 'Home' }).click()
    await expect(page).toHaveURL('/')
    await expect(page.locator('#changelog')).toBeVisible()
  })

  test('Track Random opens a popup', async ({ page }) => {
    await page.goto('/')
    const popupPromise = page.waitForEvent('popup')
    await page.locator('nav a', { hasText: 'Track Random' }).click()
    const popup = await popupPromise
    await popup.waitForLoadState()
    await expect(popup).toHaveURL(/\/track$/)
  })

  test('Track Vanilla opens a popup with query params', async ({ page }) => {
    await page.goto('/')
    const popupPromise = page.waitForEvent('popup')
    await page.locator('nav a', { hasText: 'Track Vanilla' }).click()
    const popup = await popupPromise
    await popup.waitForLoadState()
    await expect(popup).toHaveURL(/\/track\?/)
    await expect(popup).toHaveURL(/pools=/)
    await expect(popup).toHaveURL(/stun=GreenRupee/)
  })
})
