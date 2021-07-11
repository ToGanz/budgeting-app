<template>
  <div>
    <h2 class="mt-6 cursor-pointer text-center text-3xl font-extrabold text-gray-900">
      {{ plan.title }}
    </h2>
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

