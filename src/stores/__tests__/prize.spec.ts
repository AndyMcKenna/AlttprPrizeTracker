import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePrizeStore } from '../prize'

describe('prize store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('initial state', () => {
    it('has 7 pools all set to QuestionPack', () => {
      const store = usePrizeStore()
      expect(store.pools).toHaveLength(7)
      store.pools.forEach(p => expect(p).toBe('QuestionPack'))
    })

    it('has 3 tree prizes all set to Question', () => {
      const store = usePrizeStore()
      expect(store.tree).toHaveLength(3)
      store.tree.forEach(t => expect(t).toBe('Question'))
    })

    it('has stun set to Question', () => {
      const store = usePrizeStore()
      expect(store.stun).toBe('Question')
    })

    it('has 2 bush prizes all set to Question', () => {
      const store = usePrizeStore()
      expect(store.bush).toHaveLength(2)
      store.bush.forEach(b => expect(b).toBe('Question'))
    })

    it('has fish set to Question', () => {
      const store = usePrizeStore()
      expect(store.fish).toBe('Question')
    })

    it('has prizePackModalIsOpen as false', () => {
      const store = usePrizeStore()
      expect(store.prizePackModalIsOpen).toBe(false)
    })

    it('has prizeModalIsOpen as false', () => {
      const store = usePrizeStore()
      expect(store.prizeModalIsOpen).toBe(false)
    })

    it('has prizePackPropertyIndex as 0', () => {
      const store = usePrizeStore()
      expect(store.prizePackPropertyIndex).toBe(0)
    })

    it('has singlePrizePropertyName as empty string', () => {
      const store = usePrizeStore()
      expect(store.singlePrizePropertyName).toBe('')
    })

    it('has singlePrizePropertyIndex as 0', () => {
      const store = usePrizeStore()
      expect(store.singlePrizePropertyIndex).toBe(0)
    })
  })

  describe('openPrizePackModal', () => {
    it('opens the modal', () => {
      const store = usePrizeStore()
      store.openPrizePackModal(0)
      expect(store.prizePackModalIsOpen).toBe(true)
    })

    it.each([0, 1, 2, 3, 4, 5, 6])('sets prizePackPropertyIndex to %i', (index) => {
      const store = usePrizeStore()
      store.openPrizePackModal(index)
      expect(store.prizePackPropertyIndex).toBe(index)
    })
  })

  describe('setPrizePack', () => {
    it('updates pools at the current index', () => {
      const store = usePrizeStore()
      store.openPrizePackModal(2)
      store.setPrizePack('BlueRupeePack')
      expect(store.pools[2]).toBe('BlueRupeePack')
    })

    it('closes the modal', () => {
      const store = usePrizeStore()
      store.openPrizePackModal(0)
      store.setPrizePack('FullMagicPack')
      expect(store.prizePackModalIsOpen).toBe(false)
    })

    it('only modifies the selected pool index', () => {
      const store = usePrizeStore()
      store.openPrizePackModal(4)
      store.setPrizePack('HeartHeartPack')
      expect(store.pools[4]).toBe('HeartHeartPack')
      ;[0, 1, 2, 3, 5, 6].forEach(i => expect(store.pools[i]).toBe('QuestionPack'))
    })

    it.each([
      'BlueRupeePack', 'FiveArrowsPack', 'FullMagicPack', 'HeartFairyPack',
      'HeartHeartPack', 'SingleBombPack', 'SmallMagicPack', 'QuestionPack'
    ])('stores %s correctly', (packName) => {
      const store = usePrizeStore()
      store.openPrizePackModal(0)
      store.setPrizePack(packName)
      expect(store.pools[0]).toBe(packName)
    })
  })

  describe('openPrizeModal', () => {
    it('opens the modal', () => {
      const store = usePrizeStore()
      store.openPrizeModal('stun')
      expect(store.prizeModalIsOpen).toBe(true)
    })

    it.each(['tree', 'bush', 'stun', 'fish'])('sets singlePrizePropertyName to %s', (prop) => {
      const store = usePrizeStore()
      store.openPrizeModal(prop)
      expect(store.singlePrizePropertyName).toBe(prop)
    })

    it('sets singlePrizePropertyIndex when provided', () => {
      const store = usePrizeStore()
      store.openPrizeModal('tree', 2)
      expect(store.singlePrizePropertyIndex).toBe(2)
    })

    it('does not change singlePrizePropertyIndex when index is omitted', () => {
      const store = usePrizeStore()
      store.openPrizeModal('tree', 1)
      store.openPrizeModal('stun')
      expect(store.singlePrizePropertyIndex).toBe(1)
    })
  })

  describe('setSinglePrize', () => {
    it('updates tree at the current index', () => {
      const store = usePrizeStore()
      store.openPrizeModal('tree', 1)
      store.setSinglePrize('BlueRupee')
      expect(store.tree[1]).toBe('BlueRupee')
    })

    it('does not affect other tree indices', () => {
      const store = usePrizeStore()
      store.openPrizeModal('tree', 0)
      store.setSinglePrize('RedRupee')
      expect(store.tree[1]).toBe('Question')
      expect(store.tree[2]).toBe('Question')
    })

    it('updates bush at the current index', () => {
      const store = usePrizeStore()
      store.openPrizeModal('bush', 1)
      store.setSinglePrize('GreenRupee')
      expect(store.bush[1]).toBe('GreenRupee')
    })

    it('does not affect other bush indices', () => {
      const store = usePrizeStore()
      store.openPrizeModal('bush', 0)
      store.setSinglePrize('RedRupee')
      expect(store.bush[1]).toBe('Question')
    })

    it('updates stun', () => {
      const store = usePrizeStore()
      store.openPrizeModal('stun')
      store.setSinglePrize('Heart')
      expect(store.stun).toBe('Heart')
    })

    it('updates fish', () => {
      const store = usePrizeStore()
      store.openPrizeModal('fish')
      store.setSinglePrize('Fairy')
      expect(store.fish).toBe('Fairy')
    })

    it('closes the modal', () => {
      const store = usePrizeStore()
      store.openPrizeModal('stun')
      store.setSinglePrize('GreenRupee')
      expect(store.prizeModalIsOpen).toBe(false)
    })

    it('resets singlePrizePropertyIndex to 0', () => {
      const store = usePrizeStore()
      store.openPrizeModal('tree', 2)
      store.setSinglePrize('BlueRupee')
      expect(store.singlePrizePropertyIndex).toBe(0)
    })

    it.each([
      'GreenRupee', 'BlueRupee', 'RedRupee', 'FiveArrows', 'TenArrows',
      'Fairy', 'Heart', 'SmallMagic', 'FullMagic', 'SingleBomb', 'FourBombs', 'EightBombs'
    ])('accepts %s as a prize', (prize) => {
      const store = usePrizeStore()
      store.openPrizeModal('stun')
      store.setSinglePrize(prize)
      expect(store.stun).toBe(prize)
    })
  })
})
