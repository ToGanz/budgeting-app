<template>
  <button
    @click="toggleShowFilter"
    class="py-1 px-2 mt-4 border border-transparent text-sm font-medium rounded-md text-indigo bg-white-600 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    Filter
    <span v-if="showFilter">-</span>
    <span v-else>+</span>
  </button>
  <div v-if="showFilter" class="flex place-content-center gap-x-4 mt-4">
    <span
      v-for="category in categories"
      :key="category.id"
      class="filter-option"
    >
      <input type="checkbox" :id="category.id" @change="setFilter" />
      <label :for="category.id">{{ category.name }}</label>
    </span>
    <button
      @click="resetFilter"
      class="w-14 py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Reset
    </button>
  </div>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: null,
      showFilter: false
    }
  },
  computed: {
    categories() {
      const categories = this.$store.getters['categories/categories']
      return categories
    }
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id
      const isActive = event.target.checked
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      }
      this.filters = updatedFilters
      this.$emit('change-filter', updatedFilters)
    },
    resetFilter() {
      this.filters = null
      this.$emit('change-filter', null)
    },
    toggleShowFilter() {
      this.showFilter = !this.showFilter
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
