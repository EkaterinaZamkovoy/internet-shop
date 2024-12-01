<template>
  <div :class="[$style.card, { [$style.sold]: product.isSold }]">
    <img
      :src="product.images[0]"
      alt="Product Image"
      @click="!product.isSold && $emit('showModal', product)"
    />
    <div
      :class="$style.card__info"
      @click="!product.isSold && $emit('showModal', product)"
    >
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </div>
    <div :class="$style.card__price">
      <template v-if="product.isSold">
        <p>Продана на аукционе</p>
      </template>
      <template v-else>
        <p>{{ product.price }} $</p>
        <LoaderComponent
          v-if="buttonState === 'processing'"
          :isLoading="true"
        />
        <ButtonComponent
          :class="[
            $style.card__button,
            { [$style.inCart]: buttonState === 'in-cart' },
          ]"
          :onClick="handleBuy"
        >
          <template v-if="buttonState === 'in-cart'">
            <i class="icon-check">
              <img src="../assets/icons/check.svg" alt="Check Icon" />
            </i>
            <span>В корзине</span>
          </template>
          <template v-else>
            <span>Купить</span>
          </template>
        </ButtonComponent>
      </template>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import LoaderComponent from './LoaderComponent.vue';

export default {
  name: 'ProductCard',
  components: { ButtonComponent, LoaderComponent },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      buttonState: 'default', // Состояния: 'default', 'processing', 'in-cart'
    };
  },
  methods: {
    handleBuy() {
      if (this.product.isSold) return;
      if (this.buttonState === 'in-cart') {
        this.buttonState = 'default';
        this.updateLocalStorage(false);
        return;
      }

      this.buttonState = 'processing';

      setTimeout(() => {
        this.buttonState = 'in-cart';
        this.updateLocalStorage(true);
      }, 2000);
    },
    updateLocalStorage(isAdding) {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      if (isAdding) {
        // Добавляем id в localStorage, если его еще нет
        if (!cartItems.includes(this.product.id)) {
          cartItems.push(this.product.id);
        }
      } else {
        // Удаляем id из localStorage, если он существует
        const index = cartItems.indexOf(this.product.id);
        if (index > -1) {
          cartItems.splice(index, 1);
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log('Updated localStorage:', JSON.stringify(cartItems));
    },
    loadStateFromLocalStorage() {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      this.buttonState = cartItems.includes(this.product.id)
        ? 'in-cart'
        : 'default';
    },
  },
  mounted() {
    this.loadStateFromLocalStorage();
  },
};
</script>

<style lang="scss" module>
@import '../styles/variables.scss';

.card {
  max-width: 400px;
  width: 100%;
  height: 100%;
  border: 1px solid $border-color;

  @media (max-width: 470px) {
    max-width: 350px;
  }

  img {
    width: 100%;
    cursor: pointer;
  }

  &.sold {
    opacity: 0.5;
    pointer-events: none;

    p {
      font-weight: bold;
    }
  }

  &__button {
    display: flex;
    justify-content: space-between;
    gap: 5px;
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

  &__button.inCart {
    background-color: $secondary-color;
    color: $primary-background-color;
    padding: 15px 20px;

    &:hover {
      background-color: $hover-color;
    }
  }

  &__info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px 30px;

    h3 {
      font-weight: 400;
      margin: 0;
      cursor: pointer;
    }

    p {
      margin: 0;
    }
  }

  &__price {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }
}

.icon-check {
  width: 16px;
  height: 16px;
}
</style>
