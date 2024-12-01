export const products = [
  {
    id: 1,
    name: '«Рождение Венеры»',
    description: 'Сандро Боттичелли',
    price: 1000000,
    images: [
      require('../assets/venera.png'),
      require('../assets/venera2.jpeg'),
      require('../assets/venera.png'),
    ],
    isSold: false,
  },
  {
    id: 2,
    name: '«Тайная вечеря»',
    description: 'Леонардо да Винчи',
    price: 3000000,
    images: [
      require('../assets/vecher.png'),
      require('../assets/vecher2.jpg'),
      require('../assets/vecher.png'),
    ],
    isSold: false,
  },
  {
    id: 3,
    name: '«Сотворение Адама»',
    description: 'Шедевр Микеланджело',
    price: 5000000,
    images: [
      require('../assets/adam.png'),
      require('../assets/adam2.jpg'),
      require('../assets/adam.png'),
    ],
    isSold: false,
  },
  {
    id: 4,
    name: '«Урок анатомии»',
    description: 'Рембрандт',
    price: '-',
    images: [require('../assets/lesson.png')],
    isSold: true,
  },
];
