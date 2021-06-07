import { mount } from '@vue/test-utils'
import PlanDetails from '@/components/plans/PlanDetails'

describe('PlanDetails', () => {
  it('displays the title of the plan', () => {
    const plan = { id: 1, title: 'plan 1' }

    const wrapper = mount(PlanDetails, {
      propsData: {
        plan
      }
    })

    const wrapperHtml = wrapper.html()
    expect(wrapperHtml).toContain('plan 1')
  })
})
