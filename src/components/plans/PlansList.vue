<template>
  <div class="flex flex-col max-w-lg mx-auto px-4 sm:px-6">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        class="py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8"
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
                  Title
                </th>
                <th scope="col" class="relative px-6 py-3 hidden sm:block">
                  <span class="sr-only">Go to plan</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="plan in plans" :key="plan.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900">
                      {{ plan.title }}
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <router-link
                    :to="{ name: 'Plan', params: { id: plan.id } }"
                  >
                    <ArrowCircleRightIcon
                      class="h-5 w-5"
                      aria-hidden="true"
                    />
                  </router-link>
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
import { ArrowCircleRightIcon } from '@heroicons/vue/solid'
export default {
  components: {
    ArrowCircleRightIcon
  },
  props: {
    plans: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
