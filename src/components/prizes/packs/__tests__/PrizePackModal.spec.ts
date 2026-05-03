import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { usePrizeStore } from '@/stores/prize'
import PrizePackModal from '../PrizePackModal.vue'

const DialogStub = {
  template: '<div class="dialog-stub"><slot v-if="visible" /></div>',
  props: { visible: Boolean, modal: Boolean }
}

const packChildStubs = {
  BlueRupeePack: true, FiveArrowsPack: true, FullMagicPack: true,
  HeartFairyPack: true, HeartHeartPack: true, SingleBombPack: true,
  SmallMagicPack: true, QuestionPack: true
}

const mountModal = () =>
  mount(PrizePackModal, {
    global: {
      stubs: { Dialog: DialogStub, ...packChildStubs }
    }
  })

describe('PrizePackModal', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('does not show items when modal is closed', () => {
    const wrapper = mountModal()
    expect(wrapper.findAll('.Item')).toHaveLength(0)
  })

  it('shows all 8 pack items when modal is open', () => {
    const store = usePrizeStore()
    store.prizePackModalIsOpen = true as any
    const wrapper = mountModal()
    expect(wrapper.findAll('.Item')).toHaveLength(8)
  })

  it.each([
    [0, 'BlueRupeePack'],
    [1, 'FiveArrowsPack'],
    [2, 'FullMagicPack'],
    [3, 'HeartFairyPack'],
    [4, 'HeartHeartPack'],
    [5, 'SingleBombPack'],
    [6, 'SmallMagicPack'],
    [7, 'QuestionPack'],
  ] as const)('clicking item %i sets pool to %s', async (index, packName) => {
    const store = usePrizeStore()
    store.openPrizePackModal(0)
    const wrapper = mountModal()
    await wrapper.findAll('.Item')[index].trigger('click')
    expect(store.pools[0]).toBe(packName)
  })

  it('closes the modal after a selection', async () => {
    const store = usePrizeStore()
    store.openPrizePackModal(0)
    const wrapper = mountModal()
    await wrapper.findAll('.Item')[0].trigger('click')
    expect(store.prizePackModalIsOpen).toBe(false)
  })

  it('updates the correct pool index', async () => {
    const store = usePrizeStore()
    store.openPrizePackModal(5)
    const wrapper = mountModal()
    await wrapper.findAll('.Item')[2].trigger('click') // FullMagicPack
    expect(store.pools[5]).toBe('FullMagicPack')
    ;[0, 1, 2, 3, 4, 6].forEach(i => expect(store.pools[i]).toBe('QuestionPack'))
  })
})
