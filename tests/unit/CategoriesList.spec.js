import { mount } from '@vue/test-utils'
import CategoriesList from '@/components/categories/CategoriesList'

describe('CategoriesList', () => {
  it('displays the name of the category', () => {
    const categories = [
      {
        id: 1,
        name: 'category 1'
      },
      {
        id: 2,
        name: 'category 2'
      },
      {
        id: 3,
        name: 'category 3'
      }
    ]

    const wrapper = mount(CategoriesList, {
      propsData: {
        categories
      }
    })

    const wrapperHtml = wrapper.html()
    expect(wrapperHtml).toContain('category 1')
    expect(wrapperHtml).toContain('category 2')
    expect(wrapperHtml).toContain('category 3')
  })
})
