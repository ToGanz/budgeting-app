<template>
  <div>
    <base-dialog :show="isLoading" title="Creating Plan.." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <plan-form mode="create" @save-data="createPlan"></plan-form>
    <ul>
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
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
