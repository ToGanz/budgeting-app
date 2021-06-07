import { mount } from '@vue/test-utils';
import PlansList from '@/components/plans/PlansList';

describe('PlansList', () => {
  it('displays the title of the plans', () => {
    const plans = [
      {
        id: 1,
        title: 'plan 1',
      },
      {
        id: 2,
        title: 'plan 2',
      },
      {
        id: 3,
        title: 'plan 3',
      },
    ];

    const wrapper = mount(PlansList, {
      propsData: {
        plans,
      },
    });

    const wrapperHtml = wrapper.html()
    expect(wrapperHtml).toContain('plan 1')
    expect(wrapperHtml).toContain('plan 2')
    expect(wrapperHtml).toContain('plan 3')
  });
});
