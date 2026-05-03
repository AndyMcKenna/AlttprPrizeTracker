import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
  it('renders the Contact heading', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.text()).toContain('Contact')
  })

  it('renders the Credits heading', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.text()).toContain('Credits')
  })

  it('contains a link to the GitHub repository', () => {
    const wrapper = mount(AboutView)
    const links = wrapper.findAll('a')
    const githubLink = links.find(a => a.attributes('href')?.includes('github.com'))
    expect(githubLink).toBeDefined()
  })
})
