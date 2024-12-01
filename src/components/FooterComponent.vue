<template>
  <footer :class="$style.footer">
    <NavigationComponent :links="navigationLinks" />
    <div :class="$style.footer__info">
      <div :class="$style.footer__infoItem">
        <img
          :class="$style.footer__icon"
          src="../assets/icons/phone.svg"
          alt="Телефон"
        />
        <span>+7 (812) 555-55-55</span>
      </div>
      <div :class="$style.footer__infoItem">
        <img
          :class="$style.footer__icon"
          src="../assets/icons/address.svg"
          alt="Адрес"
        />
        <span>Санкт-Петербург, ул. Ефимова, 3</span>
      </div>
    </div>
  </footer>
</template>

<script>
import NavigationComponent from './NavigationComponent.vue';

export default {
  name: 'FooterComponent',
  components: { NavigationComponent },
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

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 200px 30px 300px;
  background-color: $secondary-background-color;
  text-align: center;
  border-top: 1px solid $border-color;

  &__info {
    display: flex;
    gap: 50px;
  }

  &__infoItem {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__icon {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 1550px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;

    &__info {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
}
</style>
