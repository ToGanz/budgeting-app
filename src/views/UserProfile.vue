<template>
  <p>{{ user.name }}</p>
  <p>{{ user.email }}</p>

  <edit-user :userToEdit="user"></edit-user>
</template>

<script>
import EditUser from '@/components/users/EditUser.vue'

export default {
  components: {
    EditUser
  },
  computed: {
    user() {
      const name = this.$store.getters['users/name']
      const email = this.$store.getters['users/email']
      const user = {
        name,
        email,
        password: ''
      }
      return user
    }
  }
}
</script>
