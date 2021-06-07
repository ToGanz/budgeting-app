<template>
  <div>
    <h2>{{ plan.title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    plan: {
      type: Object,
      required: true
    }
  },
  created() {
    // fetch transactions of plan
  }
}
</script>
