import { test, expect } from '@playwright/test'

// These params mirror what startTrackingVanilla() passes
const VANILLA_PARAMS =
  'pools=HeartHeartPack,BlueRupeePack,FullMagicPack,SingleBombPack,FiveArrowsPack,SmallMagicPack,HeartFairyPack' +
  '&tree=GreeRupee,BlueRupee,RedRupee' +
  '&stun=GreenRupee' +
  '&bush=GreenRupee,RedRupee' +
  '&fish=RedRupee'

test.describe('Vanilla preset via query params', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/track?${VANILLA_PARAMS}`)
  })

  test('pool 0 shows HeartHeartPack (Heart icons)', async ({ page }) => {
    const pool0 = page.locator('.TrackedItem:not(.Smaller)').nth(0).locator('.ItemPrize')
    await expect(pool0.locator('.icon.Heart').first()).toBeVisible()
  })

  test('pool 1 shows BlueRupeePack (BlueRupee icons)', async ({ page }) => {
    const pool1 = page.locator('.TrackedItem:not(.Smaller)').nth(1).locator('.ItemPrize')
    await expect(pool1.locator('.icon.BlueRupee').first()).toBeVisible()
  })

  test('pool 2 shows FullMagicPack (FullMagic icons)', async ({ page }) => {
    const pool2 = page.locator('.TrackedItem:not(.Smaller)').nth(2).locator('.ItemPrize')
    await expect(pool2.locator('.icon.FullMagic').first()).toBeVisible()
  })

  test('pool 3 shows SingleBombPack (OneBomb icons)', async ({ page }) => {
    const pool3 = page.locator('.TrackedItem:not(.Smaller)').nth(3).locator('.ItemPrize')
    await expect(pool3.locator('.icon.OneBomb').first()).toBeVisible()
  })

  test('pool 4 shows FiveArrowsPack (FiveArrows icons)', async ({ page }) => {
    const pool4 = page.locator('.TrackedItem:not(.Smaller)').nth(4).locator('.ItemPrize')
    await expect(pool4.locator('.icon.FiveArrows').first()).toBeVisible()
  })

  test('pool 5 shows SmallMagicPack (SmallMagic icons)', async ({ page }) => {
    const pool5 = page.locator('.TrackedItem:not(.Smaller)').nth(5).locator('.ItemPrize')
    await expect(pool5.locator('.icon.SmallMagic').first()).toBeVisible()
  })

  test('pool 6 shows HeartFairyPack (Heart and Fairy icons)', async ({ page }) => {
    const pool6 = page.locator('.TrackedItem:not(.Smaller)').nth(6).locator('.ItemPrize')
    await expect(pool6.locator('.icon.Heart').first()).toBeVisible()
    await expect(pool6.locator('.icon.Fairy').first()).toBeVisible()
  })

  test('stun shows GreenRupee', async ({ page }) => {
    const stunSection = page.locator('.TrackedItem.Smaller').nth(1)
    await expect(stunSection.locator('.icon.GreenRupee')).toBeVisible()
  })

  test('bush shows GreenRupee and RedRupee', async ({ page }) => {
    const bushSection = page.locator('.TrackedItem.Smaller').nth(2)
    await expect(bushSection.locator('.icon.GreenRupee')).toBeVisible()
    await expect(bushSection.locator('.icon.RedRupee')).toBeVisible()
  })

  test('fish shows RedRupee', async ({ page }) => {
    const fishSection = page.locator('.TrackedItem.Smaller').nth(3)
    await expect(fishSection.locator('.icon.RedRupee')).toBeVisible()
  })

  test('no pools show the default QuestionPack', async ({ page }) => {
    const pools = page.locator('.TrackedItem:not(.Smaller) .ItemPrize')
    for (let i = 0; i < 7; i++) {
      await expect(pools.nth(i).locator('.icon.Question')).not.toBeVisible()
    }
  })
})
