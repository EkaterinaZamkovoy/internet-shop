<template>
  <nav :class="$style.navigation">
    <ul :class="$style.navigation__list">
      <li v-for="link in links" :key="link.text">
        <a :href="link.url" :class="$style.navigation__link">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation-Component',
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import '../styles/variables.scss';

.navigation {
  display: flex;

  &__list {
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 580px) {
      gap: 5px;
    }

    @media (max-width: 580px) {
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
  }

  &__link {
    text-decoration: none;
    color: $text-color;
  }
}
</style>
