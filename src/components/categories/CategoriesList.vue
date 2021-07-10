<template>
  <base-dialog :show="showEdit" title="Edit Category" @close="toggleEdit">
    <div>
      <edit-category
        :categoryToEdit="category"
        @update="toggleEdit"
      ></edit-category>
      <delete-category :id="category.id" @delete="toggleEdit"></delete-category>
    </div>
  </base-dialog>

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
                  Category
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
                <th scope="col" class="relative px-6 py-3 hidden sm:block">
                  <span class="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="category in categories" :key="category.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900">
                      {{ category.name }}
                    </div>
                  </div>
                </td>
                <td
                  @click="showModal(category)"
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <button class="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </button>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium hidden sm:block"
                >
                  <delete-category :id="category.id"></delete-category>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditCategory from '@/components/categories/EditCategory.vue'
import DeleteCategory from '@/components/categories/DeleteCategory.vue'

export default {
  components: {
    EditCategory,
    DeleteCategory
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      category: null,
      showEdit: false
    }
  },
  methods: {
    toggleEdit() {
      this.showEdit = !this.showEdit
    },
    showModal(category) {
      this.category = category
      this.showEdit = true
    }
  }
}
</script>

<style scoped></style>
