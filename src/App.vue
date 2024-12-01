<template>
  <div id="app">
    <Header :handleSearch="handleSearch" />
    <main>
      <ProductList :items="filteredItems" @showModal="showModal" />
    </main>
    <FooterComponent />
    <ModalComponent
      v-if="isModalVisible"
      :product="currentProduct"
      @close="closeModal"
    />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import Header from './components/HeaderComponent.vue';
import ProductList from './components/ProductList.vue';
import ModalComponent from './components/ModalComponent.vue';
import { products } from './data/products';

export default {
  name: 'App',
  components: {
    Header,
    FooterComponent,
    ProductList,
    ModalComponent,
  },
  data() {
    return {
      products,
      filteredItems: products,
      isModalVisible: false,
      currentProduct: null,
    };
  },
  methods: {
    handleSearch(searchText) {
      const normalizedSearchText = searchText.toLowerCase().trim();
      const filtered = this.products.filter((product) =>
        product.name.toLowerCase().includes(normalizedSearchText)
      );
      this.filteredItems = filtered;
    },
    showModal(product) {
      this.currentProduct = product;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.currentProduct = null;
    },
  },
};
</script>

<style lang="scss">
@import './styles/global.scss';
</style>
