import CategoryService from '@/services/CategoryService.js'

export default {
  async getCategories(context) {
    const response = await CategoryService.getCategories()

    const responseData = response.data

    const categories = []

    responseData.data.forEach((category) => {
      categories.push({
        id: category.id,
        ...category.attributes
      })
    })

    context.commit('SET_CATEGORIES', categories)
  },
  async createCategory(context, data) {
    const response = await CategoryService.createCategory(data.name)
    const responseData = response.data

    context.commit('ADD_CATEGORY', {
      id: responseData.data.id,
      ...responseData.data.attributes
    })
  },
  async editCategory(context, data) {
    const response = await CategoryService.editCategory(
      data.id,
      data.category.name
    )
    const responseData = response.data

    context.commit('EDIT_CATEGORY', {
      id: responseData.data.id,
      ...responseData.data.attributes
    })
  },
  async deleteCategory(context, data) {
    await CategoryService.deleteCategory(data.id)
    context.commit('REMOVE_CATEGORY', { id: data.id })
  }
}
