<template>
  <div :class="$style.modal">
    <div :class="$style.modal__content">
      <div :class="$style.modal__content_slider">
        <img :src="currentImage" alt="Product Image" />
        <div :class="$style.modal__buttonsWrap">
          <ButtonComponent
            :class="$style.modal__buttonsWrap_btn"
            :onClick="prevImage"
            >&lt;</ButtonComponent
          >
          <ButtonComponent
            :class="$style.modal__buttonsWrap_btn"
            :onClick="nextImage"
            >></ButtonComponent
          >
        </div>
      </div>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>{{ product.price }} $</p>
      <ButtonComponent :class="$style.closeBtn" :onClick="handleClose"
        >Закрыть</ButtonComponent
      >
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'ModalComponent',
  components: { ButtonComponent },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      console.log('Current image index:', this.currentImageIndex);
      return this.product.images[this.currentImageIndex];
    },
  },
  methods: {
    prevImage() {
      console.log('prevImage clicked');
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.product.images.length) %
        this.product.images.length;
    },
    nextImage() {
      console.log('nextImage clicked');
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.product.images.length;
    },
    handleClose() {
      this.$emit('close');
    },
  },
  mounted() {
    console.log('Images:', this.product.images);
  },
};
</script>

<style lang="scss" module>
@import '../styles/variables.scss';

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  &__content {
    display: flex;
    flex-direction: column;
    text-align: center;
    background: $primary-background-color;
    padding: 20px 50px;
    border-radius: 5px;
    width: 50%;

    &_slider {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      img {
        width: 100%;
      }
    }
  }
  &__buttonsWrap {
    display: flex;
    justify-content: space-between;

    &_btn {
      border: none;
      background-color: inherit;
      padding: 20px;
      font-size: 40px;
      font-weight: 200;
      cursor: pointer;

      &:hover {
        color: rgb(169, 169, 0);
      }
    }
  }

  .closeBtn {
    width: 200px;
    align-self: flex-end;
    padding: 15px 35px;
    background-color: $primary-color;
    color: $primary-background-color;
    border: none;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: $hover-color;
    }
  }
}
</style>
