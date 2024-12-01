<template>
  <section :class="$style.productList">
    <h1>Картины эпохи Возрождения</h1>
    <div v-if="items.length" :class="$style.productList__item">
      <ProductCard
        v-for="item in items"
        :key="item.id"
        :product="item"
        @showModal="$emit('showModal', item)"
      />
    </div>
    <p v-else>Ничего не найдено</p>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProductCard,
  },
};
</script>

<style lang="scss" module>
.productList {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 50px 50px 200px;

  &__item {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: 1500px) {
    gap: 20px;
    padding: 0 0 50px 50px;
  }
}
</style>
