<template>
  <div :class="$style.searchBar">
    <input
      :class="$style.searchBar__input"
      type="text"
      placeholder="Поиск по названию картины"
      v-model="searchText"
      @input="onInput"
    />
    <ButtonComponent :class="$style.searchBar__button" :onClick="onSearch"
      >Найти</ButtonComponent
    >
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'SearchInput',
  components: { ButtonComponent },
  props: {
    searchHandler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    onInput() {
      this.searchHandler(this.searchText);
    },
    onSearch() {
      this.searchHandler(this.searchText);
    },
  },
};
</script>

<style lang="scss" module>
@import '../styles/variables';

.searchBar {
  display: flex;
  align-items: center;
  max-width: 416px;
  width: 100%;

  @media (max-width: 470px) {
    max-width: 300px;
  }

  &__input {
    flex: 1;
    padding: 15px 20px;
    border: 1px solid $border-color;
    border-right: none;
    outline: none;
    font-size: 16px;

    &::placeholder {
      color: $text-color;
      opacity: 0.4;
    }

    &:focus {
      border: 1px solid $focus-border-color;
    }
  }

  &__button {
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
