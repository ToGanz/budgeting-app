<template>
  <base-dialog :show="showEdit" title="Edit Category" @close="toggleEdit">
    <div>
      <edit-category :categoryToEdit="category" @update="toggleEdit"></edit-category>
      <delete-category :id="category.id"></delete-category>
    </div>
  </base-dialog>
  <ul id="categories-list">
    <li v-for="category in categories" :key="category.id" @click="showModal(category)">
      {{ category.name }}
    </li>
  </ul>
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
