<template>
  <div>
    <base-dialog :show="isLoading" title="Updating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <user-form
      mode="update"
      :emailToEdit="userToEdit.email"
      :nameToEdit="userToEdit.name"
      @save-data="editUser"
    ></user-form>
    <ul>
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
import UserForm from '@/components/users/UserForm.vue'

export default {
  components: {
    UserForm
  },
  props: {
    userToEdit: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.userToEdit,
      isLoading: false,
      errors: null
    }
  },
  methods: {
    beautifyErrors(errors) {
      const errorList = []
      for (let error in errors) {
        if (error !== 'password_digest') {
          let errorSentence =
            error[0].toUpperCase() +
            error.slice(1) +
            ' ' +
            errors[error][0]

          errorList.push(errorSentence)
        }
      }
      return errorList
    },
    async editUser(formData) {
      this.isLoading = true
      this.errors = null

      let editedUser = {}

      const userId = this.$store.getters['users/id']

      if (formData.name) {
        editedUser.name = formData.name
      }

      if (formData.email) {
        editedUser.email = formData.email
      }

      if (formData.password) {
        editedUser.password = formData.password
      }

      const payload = {
        id: userId,
        user: editedUser
      }

      await this.$store
        .dispatch('users/editUser', payload)
        .then(() => {
          this.$router.push({ name: 'Plans' })
        })
        .catch((err) => {
          this.errors = this.beautifyErrors(err.response.data.errors)
        })

      this.isLoading = false
    }
  }
}
</script>
