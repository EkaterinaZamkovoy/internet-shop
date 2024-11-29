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
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" module>
@import "../styles/HeaderComponent.module.scss";
</style>
