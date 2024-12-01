<template>
  <div :class="$style.header">
    <NavigationComponent :links="navigationLinks" />
    <SearchBar :searchHandler="handleSearch" />
  </div>
</template>

<script>
import NavigationComponent from './NavigationComponent.vue';
import SearchBar from './SearchBar.vue';

export default {
  name: 'HeaderComponent',
  components: {
    SearchBar,
    NavigationComponent,
  },
  props: {
    handleSearch: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      navigationLinks: [
        { text: 'Каталог', url: '#' },
        { text: 'Доставка', url: '#' },
        { text: 'Оплата', url: '#' },
        { text: 'Контакты', url: '#' },
        { text: 'О компании', url: '#' },
      ],
    };
  },
};
</script>

<style lang="scss" module>
@import '../styles/variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $border-color;
  padding: 30px 200px 30px 300px;

  @media (max-width: 1400px) {
    padding: 50px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 470px) {
    padding: 20px;
  }
}
</style>
