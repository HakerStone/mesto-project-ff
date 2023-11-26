import './pages/index.css';
const jordanImage = new URL('./images/card_1.jpg', import.meta.url);
const jamesImage = new URL('./images/card_2.jpg', import.meta.url);
const bryantImage = new URL('./images/card_3.jpg', import.meta.url)

const whoIsTheGoat = [
  { name: 'Michael Jordan', link: jordanImage },
  { name: 'Lebron James', link: jamesImage },
  { name: 'Kobe Bryant', link: bryantImage },
]; 