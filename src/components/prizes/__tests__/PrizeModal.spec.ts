import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { usePrizeStore } from '@/stores/prize'
import PrizeModal from '../PrizeModal.vue'

const DialogStub = {
  template: '<div class="dialog-stub"><slot v-if="visible" /></div>',
  props: { visible: Boolean, modal: Boolean }
}

const prizeChildStubs = {
  GreenRupee: true, BlueRupee: true, RedRupee: true,
  FiveArrows: true, TenArrows: true, Fairy: true, Heart: true,
  SmallMagic: true, FullMagic: true, SingleBomb: true, FourBombs: true, EightBombs: true
}

const mountModal = () =>
  mount(PrizeModal, {
    global: {
      stubs: { Dialog: DialogStub, ...prizeChildStubs }
    }
  })

describe('PrizeModal', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('does not show items when modal is closed', () => {
    const wrapper = mountModal()
    expect(wrapper.findAll('.Item')).toHaveLength(0)
  })

  it('shows all 12 prize items when modal is open', () => {
    const store = usePrizeStore()
    store.prizeModalIsOpen = true as any
    const wrapper = mountModal()
    expect(wrapper.findAll('.Item')).toHaveLength(12)
  })

  it.each([
    [0, 'GreenRupee'],
    [1, 'BlueRupee'],
    [2, 'RedRupee'],
    [3, 'FiveArrows'],
    [4, 'TenArrows'],
    [5, 'Fairy'],
    [6, 'Heart'],
    [7, 'SmallMagic'],
    [8, 'FullMagic'],
    [9, 'SingleBomb'],
    [10, 'FourBombs'],
    [11, 'EightBombs'],
  ] as const)('clicking item %i sets stun to %s', async (index, prize) => {
    const store = usePrizeStore()
    store.openPrizeModal('stun')
    const wrapper = mountModal()
    await wrapper.findAll('.Item')[index].trigger('click')
    expect(store.stun).toBe(prize)
  })

  it('closes the modal after a selection', async () => {
    const store = usePrizeStore()
    store.openPrizeModal('stun')
    const wrapper = mountModal()
    await wrapper.findAll('.Item')[0].trigger('click')
    expect(store.prizeModalIsOpen).toBe(false)
  })

  it('updates tree index correctly', async () => {
    const store = usePrizeStore()
    store.openPrizeModal('tree', 2)
    const wrapper = mountModal()
    await wrapper.findAll('.Item')[1].trigger('click') // BlueRupee
    expect(store.tree[2]).toBe('BlueRupee')
  })

  it('updates bush index correctly', async () => {
    const store = usePrizeStore()
    store.openPrizeModal('bush', 0)
    const wrapper = mountModal()
    await wrapper.findAll('.Item')[2].trigger('click') // RedRupee
    expect(store.bush[0]).toBe('RedRupee')
  })

  it('updates fish correctly', async () => {
    const store = usePrizeStore()
    store.openPrizeModal('fish')
    const wrapper = mountModal()
    await wrapper.findAll('.Item')[5].trigger('click') // Fairy
    expect(store.fish).toBe('Fairy')
  })
})
