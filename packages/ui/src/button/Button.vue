<script setup lang="ts">
interface ButtonProps {
  type?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'medium',
  disabled: false,
})
</script>

<template>
  <button
    class="tunnel-button" :class="[
      `tunnel-button--${type}`,
      `tunnel-button--${size}`,
      { 'tunnel-button--disabled': disabled },
    ]"
    :disabled="disabled"
  >
    <slot>Click Me</slot>
  </button>
</template>

<style scoped>
.tunnel-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;
}

.tunnel-button--primary {
  background-color: #007bff;
  color: white;
}

.tunnel-button--primary:hover:not(.tunnel-button--disabled) {
  background-color: #0056b3;
}

.tunnel-button--secondary {
  background-color: #6c757d;
  color: white;
}

.tunnel-button--secondary:hover:not(.tunnel-button--disabled) {
  background-color: #545b62;
}

.tunnel-button--danger {
  background-color: #dc3545;
  color: white;
}

.tunnel-button--danger:hover:not(.tunnel-button--disabled) {
  background-color: #c82333;
}

.tunnel-button--small {
  padding: 6px 12px;
  font-size: 12px;
}

.tunnel-button--medium {
  padding: 8px 16px;
  font-size: 14px;
}

.tunnel-button--large {
  padding: 12px 24px;
  font-size: 16px;
}

.tunnel-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
