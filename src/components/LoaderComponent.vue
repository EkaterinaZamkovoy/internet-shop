<template>
  <div v-if="isLoading" :class="$style.loader">
    <div :class="$style.loader__spinner"></div>
    <p v-if="message" :class="$style.loader__message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoaderComponent',
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" module>
@import '../styles/variables';

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  &__spinner {
    width: 50px;
    height: 50px;
    border: 5px solid $disabled-color;
    border-top: 5px solid $primary-color;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  &__message {
    margin-top: 10px;
    font-size: 16px;
    color: $text-color;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
