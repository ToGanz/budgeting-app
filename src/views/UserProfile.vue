<template>
  <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
    Profile
  </h1>

  <div class="flex flex-col max-w-7xl mx-auto px-4 sm:px-6">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
      >
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class=" text-sm font-medium text-gray-900">
                      {{ user.name }}
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900">
                      {{ user.email }}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <edit-user :userToEdit="user"></edit-user>
  <delete-user></delete-user>
</template>

<script>
import EditUser from '@/components/users/EditUser.vue'
import DeleteUser from '@/components/users/DeleteUser.vue'

export default {
  components: {
    EditUser,
    DeleteUser
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
