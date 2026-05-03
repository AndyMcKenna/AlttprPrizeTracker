import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('renders the changelog heading', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Changelog')
  })

  it('contains at least one changelog entry', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.findAll('h3').length).toBeGreaterThan(0)
  })

  it('renders a list of changes', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.findAll('li').length).toBeGreaterThan(0)
  })
})
