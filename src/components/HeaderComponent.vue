<template>
  <div :class="$style.header">
    <nav :class="$style.header__nav">
      <div :class="$style.header__navLinks">
        <a href="#">Каталог</a>
        <a href="#">Доставка</a>
        <a href="#">Оплата</a>
        <a href="#">Контакты</a>
        <a href="#">О компании</a>
      </div>
      <SearchBar :searchHandler="searchHandler" />
    </nav>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  name: 'HeaderComponent',
  components: {
    SearchBar,
  },
  props: {
    searchHandler: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import '../styles/variables.scss';

.header {
  border-bottom: 1px solid $border-color;
  padding: 30px 200px 30px 300px;

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__navLinks {
    display: flex;
    gap: 20px;
  }
}
</style>
