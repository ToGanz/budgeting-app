export default {
  setFlashMessage(context, data) {
    context.commit('SET_FLASH_MESSAGE', { message: data.messsage })
  }
}
