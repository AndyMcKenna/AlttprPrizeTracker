import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'

import BlueRupee from '../BlueRupee.vue'
import EightBombs from '../EightBombs.vue'
import Fairy from '../Fairy.vue'
import FiveArrows from '../FiveArrows.vue'
import FourBombs from '../FourBombs.vue'
import FullMagic from '../FullMagic.vue'
import GreenRupee from '../GreenRupee.vue'
import Heart from '../Heart.vue'
import Question from '../Question.vue'
import RedRupee from '../RedRupee.vue'
import SingleBomb from '../SingleBomb.vue'
import SmallMagic from '../SmallMagic.vue'
import TenArrows from '../TenArrows.vue'

const prizeComponents = [
  { component: BlueRupee, name: 'BlueRupee', cssClass: 'BlueRupee' },
  { component: EightBombs, name: 'EightBombs', cssClass: 'EightBombs' },
  { component: Fairy, name: 'Fairy', cssClass: 'Fairy' },
  { component: FiveArrows, name: 'FiveArrows', cssClass: 'FiveArrows' },
  { component: FourBombs, name: 'FourBombs', cssClass: 'FourBombs' },
  { component: FullMagic, name: 'FullMagic', cssClass: 'FullMagic' },
  { component: GreenRupee, name: 'GreenRupee', cssClass: 'GreenRupee' },
  { component: Heart, name: 'Heart', cssClass: 'Heart' },
  { component: Question, name: 'Question', cssClass: 'Question' },
  { component: RedRupee, name: 'RedRupee', cssClass: 'RedRupee' },
  { component: SingleBomb, name: 'SingleBomb', cssClass: 'OneBomb' },
  { component: SmallMagic, name: 'SmallMagic', cssClass: 'SmallMagic' },
  { component: TenArrows, name: 'TenArrows', cssClass: 'TenArrows' },
]

describe('prize components', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  prizeComponents.forEach(({ component, name, cssClass }) => {
    describe(name, () => {
      it('renders with icon class', () => {
        const wrapper = mount(component, {
          props: { stateProperty: 'stun' }
        })
        expect(wrapper.find('.icon').exists()).toBe(true)
      })

      it(`renders with ${cssClass} class`, () => {
        const wrapper = mount(component, {
          props: { stateProperty: 'stun' }
        })
        expect(wrapper.find(`.${cssClass}`).exists()).toBe(true)
      })

      it('renders with Selectable class', () => {
        const wrapper = mount(component, {
          props: { stateProperty: 'stun' }
        })
        expect(wrapper.find('.Selectable').exists()).toBe(true)
      })

      it('accepts optional propertyIndex prop', () => {
        const wrapper = mount(component, {
          props: { stateProperty: 'tree', propertyIndex: 1 }
        })
        expect(wrapper.find('.icon').exists()).toBe(true)
      })
    })
  })
})
