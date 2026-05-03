import { test, expect } from '@playwright/test'

test.describe('Tracker page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/track')
  })

  test.describe('layout', () => {
    test('shows 7 enemy pool sections', async ({ page }) => {
      await expect(page.locator('.TrackedItem:not(.Smaller)')).toHaveCount(7)
    })

    test('shows tree, stun, bush and fish sections', async ({ page }) => {
      await expect(page.locator('.TrackedItem.Smaller')).toHaveCount(4)
    })

    test('all pools start with QuestionPack (Question icon)', async ({ page }) => {
      const pools = page.locator('.TrackedItem:not(.Smaller) .ItemPrize')
      await expect(pools).toHaveCount(7)
      for (let i = 0; i < 7; i++) {
        await expect(pools.nth(i).locator('.icon.Question')).toBeVisible()
      }
    })

    test('navigation is hidden on tracker page', async ({ page }) => {
      await expect(page.locator('nav')).not.toBeVisible()
    })
  })

  test.describe('prize pack selection', () => {
    test('opens prize pack modal when clicking a pool', async ({ page }) => {
      await page.locator('.TrackedItem:not(.Smaller) .ItemPrize').first().click()
      await expect(page.locator('.PrizePackModal')).toBeVisible()
      await expect(page.locator('.PrizePackModal .Item')).toHaveCount(8)
    })

    test('closes modal after selecting a pack', async ({ page }) => {
      await page.locator('.TrackedItem:not(.Smaller) .ItemPrize').first().click()
      await page.locator('.PrizePackModal .Item').first().click()
      await expect(page.locator('.PrizePackModal')).not.toBeVisible()
    })

    test('selecting BlueRupeePack updates pool 0 display', async ({ page }) => {
      await page.locator('.TrackedItem:not(.Smaller) .ItemPrize').first().click()
      // First item in modal is BlueRupeePack
      await page.locator('.PrizePackModal .Item').first().click()
      const pool0 = page.locator('.TrackedItem:not(.Smaller)').first().locator('.ItemPrize')
      await expect(pool0.locator('.icon.BlueRupee').first()).toBeVisible()
    })

    test('selecting HeartHeartPack updates pool display with Heart icons', async ({ page }) => {
      // HeartHeartPack is the 5th item in the modal
      await page.locator('.TrackedItem:not(.Smaller) .ItemPrize').first().click()
      await page.locator('.PrizePackModal .Item').nth(4).click()
      const pool0 = page.locator('.TrackedItem:not(.Smaller)').first().locator('.ItemPrize')
      await expect(pool0.locator('.icon.Heart').first()).toBeVisible()
    })

    test('can select different packs for different pools', async ({ page }) => {
      // Set pool 0 to BlueRupeePack
      await page.locator('.TrackedItem:not(.Smaller) .ItemPrize').nth(0).click()
      await page.locator('.PrizePackModal .Item').first().click()

      // Set pool 1 to FiveArrowsPack
      await page.locator('.TrackedItem:not(.Smaller) .ItemPrize').nth(1).click()
      await page.locator('.PrizePackModal .Item').nth(1).click()

      const pool0 = page.locator('.TrackedItem:not(.Smaller)').nth(0).locator('.ItemPrize')
      const pool1 = page.locator('.TrackedItem:not(.Smaller)').nth(1).locator('.ItemPrize')
      await expect(pool0.locator('.icon.BlueRupee').first()).toBeVisible()
      await expect(pool1.locator('.icon.FiveArrows').first()).toBeVisible()
    })
  })

  test.describe('stun prize selection', () => {
    test('opens prize modal when clicking the stun prize', async ({ page }) => {
      const stunSection = page.locator('.TrackedItem.Smaller').nth(1)
      await stunSection.locator('.ItemPrize .icon').click()
      await expect(page.locator('.PrizeModal')).toBeVisible()
      await expect(page.locator('.PrizeModal .Item')).toHaveCount(12)
    })

    test('selecting a prize updates the stun display', async ({ page }) => {
      const stunSection = page.locator('.TrackedItem.Smaller').nth(1)
      await stunSection.locator('.ItemPrize .icon').click()
      // First item is GreenRupee
      await page.locator('.PrizeModal .Item').first().click()
      await expect(page.locator('.PrizeModal')).not.toBeVisible()
      await expect(stunSection.locator('.icon.GreenRupee')).toBeVisible()
    })
  })

  test.describe('tree prize selection', () => {
    test('opens prize modal when clicking a tree prize', async ({ page }) => {
      const treeSection = page.locator('.TrackedItem.Smaller').nth(0)
      await treeSection.locator('.ItemPrize .icon').first().click()
      await expect(page.locator('.PrizeModal')).toBeVisible()
    })

    test('selecting a prize updates the correct tree slot', async ({ page }) => {
      const treeSection = page.locator('.TrackedItem.Smaller').nth(0)
      // Click the second tree prize slot
      await treeSection.locator('.ItemPrize .icon').nth(1).click()
      await page.locator('.PrizeModal .Item').nth(1).click() // BlueRupee
      await expect(treeSection.locator('.icon.BlueRupee')).toBeVisible()
    })
  })

  test.describe('bush prize selection', () => {
    test('opens prize modal when clicking a bush prize', async ({ page }) => {
      const bushSection = page.locator('.TrackedItem.Smaller').nth(2)
      await bushSection.locator('.ItemPrize .icon').first().click()
      await expect(page.locator('.PrizeModal')).toBeVisible()
    })

    test('selecting a prize updates the bush display', async ({ page }) => {
      const bushSection = page.locator('.TrackedItem.Smaller').nth(2)
      await bushSection.locator('.ItemPrize .icon').first().click()
      await page.locator('.PrizeModal .Item').nth(2).click() // RedRupee
      await expect(bushSection.locator('.icon.RedRupee')).toBeVisible()
    })
  })

  test.describe('fish prize selection', () => {
    test('opens prize modal when clicking the fish prize', async ({ page }) => {
      const fishSection = page.locator('.TrackedItem.Smaller').nth(3)
      await fishSection.locator('.ItemPrize .icon').click()
      await expect(page.locator('.PrizeModal')).toBeVisible()
    })

    test('selecting a prize updates the fish display', async ({ page }) => {
      const fishSection = page.locator('.TrackedItem.Smaller').nth(3)
      await fishSection.locator('.ItemPrize .icon').click()
      await page.locator('.PrizeModal .Item').nth(5).click() // Fairy
      await expect(fishSection.locator('.icon.Fairy')).toBeVisible()
    })
  })
})
