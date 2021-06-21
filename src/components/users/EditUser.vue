<template>
  <div>
    <form @submit.prevent="editProfile">

      <base-input
        v-model="user.name"
        label="Name"
        type="text"
      ></base-input>

      <base-input
        v-model="user.email"
        label="Email"
        type="email"
      ></base-input>

      <base-input
        v-model="user.password"
        label="Password"
        type="password"
      ></base-input>

      <button type="submit" name="button">
        Save
      </button>

      <ul>
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  // props: {
  //   user: {
  //     type: Object,
  //     required: true
  //   }
  // },
  data() {
    return {
      user: {
        name: 'tobi',
        email: 'email@email.com',
        password: ''
      },
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
    editProfile() {
      let editedUser = {}
      
      if (this.user.name) {
        editedUser.name = this.user.name
      }

      if (this.user.email) {
        editedUser.email = this.user.email
      }

      if (this.user.password) {
        editedUser.password = this.user.password
      }
      console.log(editedUser)

      // this.$store
      //   .dispatch('users/editUser', user)
      //   .then(() => {
      //     // this.$router.push({ name: 'Plans' })
      //   })
      //   .catch((err) => {
      //     this.errors = this.beautifyErrors(err.response.data.errors)
      //   })
    }
  }
}
</script>
