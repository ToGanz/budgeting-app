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
  },
  async createPlan(context, data) {
    const response = await PlanService.createPlan(data.title)
    const responseData = response.data

    context.commit('ADD_PLAN', {
      id: responseData.data.id,
      ...responseData.data.attributes
    })
  },
  async getPlan(context, data) {
    const response = await PlanService.getPlan(data.id)
    const responseData = response.data
    
    context.commit('SET_PLAN', {
      id: responseData.data.id,
      ...responseData.data.attributes
    })
    
  },
  async editPlan(context, data) {
    const response = await PlanService.editPlan(
      data.id,
      data.plan.title
    )
    const responseData = response.data

    context.commit('SET_PLAN', {
      id: responseData.data.id,
      ...responseData.data.attributes
    })
  },
}
