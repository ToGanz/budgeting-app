import { mount } from '@vue/test-utils'
import TransactionsList from '@/components/transactions/TransactionsList'

describe('TransactionsList', () => {
  it('displays the attributes of the transaction', () => {
    const transactions = [
      {
        description: 'transaction 1',
        category: 'neccessities',
        spending: true,
        amount: 12.0,
        date: '12.06.2021'
      },
      {
        description: 'transaction 2',
        category: 'neccessities',
        spending: true,
        amount: 12.0,
        date: '12.06.2021'
      },
      {
        description: 'transaction 3',
        category: 'neccessities',
        spending: true,
        amount: 12.0,
        date: '12.06.2021'
      }
    ]

    const wrapper = mount(TransactionsList, {
      propsData: {
        transactions
      }
    })

    const wrapperHtml = wrapper.html()
    expect(wrapperHtml).toContain('transaction 1')
    expect(wrapperHtml).toContain('transaction 2')
    expect(wrapperHtml).toContain('transaction 3')
  })
})
