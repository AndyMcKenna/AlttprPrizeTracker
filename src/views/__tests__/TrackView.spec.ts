import { vi, describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { usePrizeStore } from '@/stores/prize'

vi.mock('vue-router', async () => {
  const actual = await vi.importActual<typeof import('vue-router')>('vue-router')
  return {
    ...actual,
    useRoute: vi.fn().mockReturnValue({ query: {} })
  }
})

vi.mock('@/router/index', () => ({
  default: {
    resolve: vi.fn().mockReturnValue({ href: '/trees' })
  }
}))

import { useRoute } from 'vue-router'
import TrackView from '@/views/TrackView.vue'

describe('TrackView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.mocked(useRoute).mockReturnValue({ query: {} } as any)
  })

  describe('route query param application', () => {
    it('applies pools from query params', () => {
      vi.mocked(useRoute).mockReturnValueOnce({
        query: { pools: 'HeartHeartPack,BlueRupeePack,FullMagicPack,SingleBombPack,FiveArrowsPack,SmallMagicPack,HeartFairyPack' }
      } as any)
      shallowMount(TrackView)
      const store = usePrizeStore()
      expect(store.pools[0]).toBe('HeartHeartPack')
      expect(store.pools[1]).toBe('BlueRupeePack')
      expect(store.pools[2]).toBe('FullMagicPack')
      expect(store.pools[3]).toBe('SingleBombPack')
      expect(store.pools[4]).toBe('FiveArrowsPack')
      expect(store.pools[5]).toBe('SmallMagicPack')
      expect(store.pools[6]).toBe('HeartFairyPack')
    })

    it('applies tree from query params', () => {
      vi.mocked(useRoute).mockReturnValueOnce({
        query: { tree: 'GreenRupee,BlueRupee,RedRupee' }
      } as any)
      shallowMount(TrackView)
      const store = usePrizeStore()
      expect(store.tree[0]).toBe('GreenRupee')
      expect(store.tree[1]).toBe('BlueRupee')
      expect(store.tree[2]).toBe('RedRupee')
    })

    it('applies stun from query params', () => {
      vi.mocked(useRoute).mockReturnValueOnce({
        query: { stun: 'Heart' }
      } as any)
      shallowMount(TrackView)
      const store = usePrizeStore()
      expect(store.stun).toBe('Heart')
    })

    it('applies bush from query params', () => {
      vi.mocked(useRoute).mockReturnValueOnce({
        query: { bush: 'GreenRupee,RedRupee' }
      } as any)
      shallowMount(TrackView)
      const store = usePrizeStore()
      expect(store.bush[0]).toBe('GreenRupee')
      expect(store.bush[1]).toBe('RedRupee')
    })

    it('applies fish from query params', () => {
      vi.mocked(useRoute).mockReturnValueOnce({
        query: { fish: 'Fairy' }
      } as any)
      shallowMount(TrackView)
      const store = usePrizeStore()
      expect(store.fish).toBe('Fairy')
    })

    it('applies all params together', () => {
      vi.mocked(useRoute).mockReturnValueOnce({
        query: {
          pools: 'HeartHeartPack,BlueRupeePack,FullMagicPack,SingleBombPack,FiveArrowsPack,SmallMagicPack,HeartFairyPack',
          tree: 'GreenRupee,BlueRupee,RedRupee',
          stun: 'GreenRupee',
          bush: 'GreenRupee,RedRupee',
          fish: 'RedRupee'
        }
      } as any)
      shallowMount(TrackView)
      const store = usePrizeStore()
      expect(store.pools[0]).toBe('HeartHeartPack')
      expect(store.tree[0]).toBe('GreenRupee')
      expect(store.stun).toBe('GreenRupee')
      expect(store.bush[0]).toBe('GreenRupee')
      expect(store.fish).toBe('RedRupee')
    })

    it('leaves defaults when no query params are present', () => {
      shallowMount(TrackView)
      const store = usePrizeStore()
      expect(store.pools.every(p => p === 'QuestionPack')).toBe(true)
      expect(store.tree.every(t => t === 'Question')).toBe(true)
      expect(store.stun).toBe('Question')
      expect(store.bush.every(b => b === 'Question')).toBe(true)
      expect(store.fish).toBe('Question')
    })
  })

  describe('pool click handlers', () => {
    it('opens prize pack modal for pool 0', async () => {
      const wrapper = shallowMount(TrackView)
      const store = usePrizeStore()
      const poolItems = wrapper.findAll('.ItemPrize.Selectable')
      await poolItems[0].trigger('click')
      expect(store.prizePackModalIsOpen).toBe(true)
      expect(store.prizePackPropertyIndex).toBe(0)
    })

    it('opens prize pack modal for pool 6 with correct index', async () => {
      const wrapper = shallowMount(TrackView)
      const store = usePrizeStore()
      const poolItems = wrapper.findAll('.ItemPrize.Selectable')
      await poolItems[6].trigger('click')
      expect(store.prizePackPropertyIndex).toBe(6)
    })
  })

  describe('document title', () => {
    it('sets document title to Prize Tracker', () => {
      shallowMount(TrackView)
      expect(document.title).toBe('Prize Tracker')
    })
  })
})
