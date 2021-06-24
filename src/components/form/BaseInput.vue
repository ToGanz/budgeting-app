<template>
  <label :for="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    :name="label"
    @input="$emit('update:modelValue', $event.target.value)"
  >
  <p
    v-if="error"
    class="errorMessage"
  >
    {{ error }}
  </p>
</template>

<script>
  export default {
    emits: ["update:modelValue"],
    props: {
      label: {
        type: String,
        default: ''
      },
      modelValue: {
        type: [String, Number],
        default: ''
      }
    },
  }
</script>