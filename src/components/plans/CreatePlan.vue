<template>
  <div>
    <base-dialog :show="isLoading" title="Creating Plan.." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <div
      class="flex items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <plan-form mode="create" @save-data="createPlan"></plan-form>
        <ul>
          <li v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PlanForm from '@/components/plans/PlanForm.vue'

export default {
  components: {
    PlanForm
  },
  data() {
    return {
      isLoading: false,
      errors: null
    }
  },
  methods: {
    async createPlan(formData) {
      this.isLoading = true
      this.errors = null

      const plan = {
        title: formData.title
      }

      try {
        await this.$store.dispatch('plans/createPlan', plan)

        const flashMessage = 'Plan successfully created.'
        this.$store.dispatch('setFlashMessage', {
          message: flashMessage
        })

        setTimeout(() => {
          this.$store.dispatch('setFlashMessage', {
            message: ''
          })
        }, 3000)
      } catch (err) {
        this.errors = err.response.data.errors
      }

      this.isLoading = false
    }
  }
}
</script>
