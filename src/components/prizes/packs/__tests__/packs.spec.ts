import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import BlueRupeePack from '../BlueRupeePack.vue'
import FiveArrowsPack from '../FiveArrowsPack.vue'
import FullMagicPack from '../FullMagicPack.vue'
import HeartFairyPack from '../HeartFairyPack.vue'
import HeartHeartPack from '../HeartHeartPack.vue'
import QuestionPack from '../QuestionPack.vue'
import SingleBombPack from '../SingleBombPack.vue'
import SmallMagicPack from '../SmallMagicPack.vue'

describe('prize pack components', () => {
  describe('BlueRupeePack', () => {
    it('renders 8 icons', () => {
      const wrapper = mount(BlueRupeePack)
      expect(wrapper.findAll('.icon')).toHaveLength(8)
    })

    it('contains BlueRupee icons', () => {
      const wrapper = mount(BlueRupeePack)
      expect(wrapper.findAll('.BlueRupee').length).toBeGreaterThan(0)
    })
  })

  describe('FiveArrowsPack', () => {
    it('renders 8 icons', () => {
      const wrapper = mount(FiveArrowsPack)
      expect(wrapper.findAll('.icon')).toHaveLength(8)
    })

    it('contains FiveArrows icons', () => {
      const wrapper = mount(FiveArrowsPack)
      expect(wrapper.findAll('.FiveArrows').length).toBeGreaterThan(0)
    })
  })

  describe('FullMagicPack', () => {
    it('renders 8 icons', () => {
      const wrapper = mount(FullMagicPack)
      expect(wrapper.findAll('.icon')).toHaveLength(8)
    })

    it('contains FullMagic icons', () => {
      const wrapper = mount(FullMagicPack)
      expect(wrapper.findAll('.FullMagic').length).toBeGreaterThan(0)
    })
  })

  describe('HeartFairyPack', () => {
    it('renders 8 icons', () => {
      const wrapper = mount(HeartFairyPack)
      expect(wrapper.findAll('.icon')).toHaveLength(8)
    })

    it('contains Heart and Fairy icons', () => {
      const wrapper = mount(HeartFairyPack)
      expect(wrapper.findAll('.Heart').length).toBeGreaterThan(0)
      expect(wrapper.findAll('.Fairy').length).toBeGreaterThan(0)
    })
  })

  describe('HeartHeartPack', () => {
    it('renders 8 icons', () => {
      const wrapper = mount(HeartHeartPack)
      expect(wrapper.findAll('.icon')).toHaveLength(8)
    })

    it('contains mostly Heart icons', () => {
      const wrapper = mount(HeartHeartPack)
      expect(wrapper.findAll('.Heart').length).toBeGreaterThanOrEqual(6)
    })
  })

  describe('QuestionPack', () => {
    it('renders 1 icon', () => {
      const wrapper = mount(QuestionPack)
      expect(wrapper.findAll('.icon')).toHaveLength(1)
    })

    it('contains Question icon', () => {
      const wrapper = mount(QuestionPack)
      expect(wrapper.find('.Question').exists()).toBe(true)
    })
  })

  describe('SingleBombPack', () => {
    it('renders 8 icons', () => {
      const wrapper = mount(SingleBombPack)
      expect(wrapper.findAll('.icon')).toHaveLength(8)
    })

    it('contains OneBomb icons', () => {
      const wrapper = mount(SingleBombPack)
      expect(wrapper.findAll('.OneBomb').length).toBeGreaterThan(0)
    })
  })

  describe('SmallMagicPack', () => {
    it('renders 8 icons', () => {
      const wrapper = mount(SmallMagicPack)
      expect(wrapper.findAll('.icon')).toHaveLength(8)
    })

    it('contains SmallMagic icons', () => {
      const wrapper = mount(SmallMagicPack)
      expect(wrapper.findAll('.SmallMagic').length).toBeGreaterThan(0)
    })
  })
})
