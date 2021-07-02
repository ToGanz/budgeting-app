<template>
  <div>
    <base-dialog :show="isLoading" title="Updating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <plan-form
      mode="update"
      :titleToEdit="planToEdit.title"
      @save-data="editPlan"
    ></plan-form>
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
  emits: ['update'],
  props: {
    planToEdit: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      plan: this.planToEdit,
      isLoading: false,
      errors: null
    }
  },
  methods: {
    close() {
        this.$emit("update");
    },
    async editPlan(formData) {
      this.isLoading = true
      this.errors = null
      const editedPlan = {
        title: formData.title
      }
      const payload = {
        id: this.plan.id,
        plan: editedPlan
      }
      try {
        await this.$store.dispatch('plans/editPlan', payload)
        const flashMessage = 'Plan updated successfully.'
        this.$store.dispatch('setFlashMessage', {
          message: flashMessage
        })

        setTimeout(() => {
          this.$store.dispatch('setFlashMessage', {
            message: ''
          })
        }, 3000)

        //this.$router.push({ name: 'Plan', params: { id: this.plan.id } })
        this.close()
      } catch (err) {
        this.errors = err.response.data.errors
      }

      this.isLoading = false
    }
  }
}
</script>
