<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import './styles/global.scss';
</style>
