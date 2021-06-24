<template>
  <label :for="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    :id="label"
    @input="$emit('update:modelValue', $event.target.value)"
    :aria-describedby="error ? `${label}-error` : null"
  >
  <p
    v-if="error"
    class="errorMessage"
    :id="`${label}-error`"
    aria-live="assertive"
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
      },
      error: {
        type: String,
        default: ''
      }
    },
  }
</script>