import PlanService from '@/services/PlanService.js'

export default {
  async getTransactions(context, data) {
    const response = await PlanService.getTransactions(data.planId)

    const responseData = response.data

    const transactions = []

    responseData.data.forEach((transaction) => {
      transactions.push({
        id: transaction.id,
        ...transaction.attributes,
        categoryId: transaction.relationships.category.data.id
      })
    })

    context.commit('SET_TRANSACTIONS', transactions)
  },
  async createTransaction(context, data) {
    const response = await PlanService.createTransaction(
      data.planId,
      data.description,
      data.amount,
      data.categoryId
    )
    const responseData = response.data

    context.commit('ADD_TRANSACTION', {
      id: responseData.data.id,
      ...responseData.data.attributes
    })
  },
  async editTransaction(context, data) {
    const response = await PlanService.editTransaction(
      data.planId,
      data.transactionId,
      data.transaction
    )

    const responseData = response.data

    context.commit('EDIT_TRANSACTION', {
      id: responseData.data.id,
      ...responseData.data.attributes
    })
  },
  async deleteTransaction(context, data) {
    await PlanService.deleteTransaction(data.planId, data.transactionId)
    context.commit('REMOVE_TRANSACTION', { id: data.transactionId })
  }
}
