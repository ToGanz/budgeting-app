import PlanService from '@/services/PlanService.js'

export default {
  async getPlans(context) {
    const response = await PlanService.getPlans()

    const responseData = response.data
    // console.log('response')
    // console.log(response)
    // console.log('response.data')
    // console.log(responseData)
    // if (!response.ok) {
    //   console.log(response.ok)
    //   const error = new Error(responseData.message || 'Failed to fetch Plans.')
    //   throw error
    // }

    const plans = []

    responseData.data.forEach((plan) => {
      plans.push({
        id: plan.id,
        ...plan.attributes
      })
    })

    context.commit('setPlans', plans)
  }
}
