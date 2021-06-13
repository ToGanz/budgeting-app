import PlanService from '@/services/PlanService.js'

export default {
  async getPlans(context) {
    const response = await PlanService.getPlans()

    const responseData = response.data
    
    const plans = []

    responseData.data.forEach((plan) => {
      plans.push({
        id: plan.id,
        ...plan.attributes
      })
    })

    context.commit('SET_PLANS', plans)
  }
}
