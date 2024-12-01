<template>
  <button :class="customClass" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    customClass: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      } else {
        console.warn('No onClick handler provided');
      }
    },
  },
};
</script>

<style lang="scss" module>
@import '../styles/variables';
</style>
