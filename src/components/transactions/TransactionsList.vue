<template>
  <base-dialog
    :show="showEdit"
    title="Edit Transaction"
    @close="toggleEdit"
  >
    <div>
      <edit-transaction
        :transactionToEdit="activeTransaction"
        @update="toggleEdit"
      ></edit-transaction>
      <delete-transaction
        :id="activeTransaction.id"
        @delete="toggleEdit"
      ></delete-transaction>
    </div>
  </base-dialog>

  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div
        v-for="transaction in transactions"
        :key="transaction.id"
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4"
          >
            <h1 class="text-lg ml-2">
              <span
                class="cursor-pointer hover:underline text-black"
                @click="showModal(transaction)"
              >
                {{ transaction.description }}
              </span>
            </h1>
            <p class="text-grey-darker text-sm">
              {{ formatDate(transaction.created_at) }}
            </p>
          </header>

          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4"
          >
            <div class="flex items-center">
              <p
                v-if="transaction.spending"
                class="ml-2 text-sm text-red-700"
              >
                <MinusIcon class="h-8 w-8 text-red-700" />
              </p>
              <p v-else class="ml-2 text-sm text-green-700">
                <PlusIcon class="h-8 w-8 text-green-700" />
              </p>
              <p class="ml-2">
                {{ transaction.amount }}
              </p>
            </div>
            <p class="text-xs">
              {{ getCategoryById(transaction.categoryId) }}
            </p>
          </footer>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
  </div>
</template>

<script>
import EditTransaction from '@/components/transactions/EditTransaction.vue'
import DeleteTransaction from '@/components/transactions/DeleteTransaction.vue'
import { PlusIcon, MinusIcon } from '@heroicons/vue/solid'
export default {
  components: {
    EditTransaction,
    DeleteTransaction,
    PlusIcon,
    MinusIcon
  },
  props: {
    transactions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTransaction: null,
      showEdit: false
    }
  },
  computed: {
    categories() {
      const categories = this.$store.getters['categories/categories']
      return categories
    }
  },
  methods: {
    toggleEdit() {
      this.showEdit = !this.showEdit
    },
    showModal(transaction) {
      this.activeTransaction = transaction
      this.showEdit = true
    },
    formatDate(date) {
      return `${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)}`
    },
    getCategoryById(categoryId) {
      return this.categories.filter(
        (category) => category.id !== categoryId
      )[0].name
    }
  }
}
</script>

<style scoped></style>
