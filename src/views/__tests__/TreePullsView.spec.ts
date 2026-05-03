import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TreePullsView from '@/views/TreePullsView.vue'

const slotStub = { template: '<div><slot /></div>' }
const stubs = {
  Tabs: slotStub,
  TabList: slotStub,
  Tab: slotStub,
  TabPanels: slotStub,
  TabPanel: slotStub
}

describe('TreePullsView', () => {
  it('renders without errors', () => {
    const wrapper = shallowMount(TreePullsView, { global: { stubs } })
    expect(wrapper.exists()).toBe(true)
  })

  it('contains the Before Aga 1 tab text', () => {
    const wrapper = shallowMount(TreePullsView, { global: { stubs } })
    expect(wrapper.text()).toContain('Before Aga 1')
  })

  it('contains the After Aga 1 tab text', () => {
    const wrapper = shallowMount(TreePullsView, { global: { stubs } })
    expect(wrapper.text()).toContain('After Aga 1')
  })
})
