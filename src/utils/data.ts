import gonduras250 from '../assets/imgs/gonduras250.png'
import gonduras1000 from '../assets/imgs/gonduras1000.png'
import ethiopia250 from '../assets/imgs/ethiopia250.png'
import kostaRica250 from '../assets/imgs/kostaRica250.png'
import { IAdresses, ICoffeeItem } from './data.types'

export const addresses: IAdresses = {
  zsu: {
    mapUrl: 'https://maps.app.goo.gl/p5HyAnebDEKj4HF67',
    localStreet: 'вул. Збройних Сил України 51В',
  },
  epicentr: {
    mapUrl: 'https://maps.app.goo.gl/8yRBWokFB4FJPrzh9',
    localStreet: 'вул. Героїв Крут 1/3 (Епіцентр)',
  }
}

export const linkedInUrl: string = 'https://www.linkedin.com/in/stas-vashchenko/';
export const developerName: string = 'Vasya Ytkin';

export const coffeeItem: ICoffeeItem = {
  id: 1,
  img: gonduras250,
  country: 'Гондурас',
  region: 'Копан',
  farm: '',
  descriptors: ['шоколад', 'горіх', 'лимон'],
  type: 'мелена',
  processing: 'мита',
  roasting: 'еспресо',
  score: 83,
  price: 250,
  weight: 250,
};

export const coffeeItem2: ICoffeeItem = {
  id: 2,
  img: gonduras250,
  country: 'Гондурас',
  region: 'Копан',
  farm: '',
  descriptors: ['шоколад', 'горіх', 'лимон'],
  type: 'зерно',
  processing: 'мита',
  roasting: 'еспресо',
  score: 83,
  price: 250,
  weight: 250,
};

export const coffeeItem3: ICoffeeItem = {
  id: 3,
  img: gonduras1000,
  country: 'Гондурас',
  region: 'Копан',
  farm: '',
  descriptors: ['шоколад', 'горіх', 'лимон'],
  type: 'зерно',
  processing: 'мита',
  roasting: 'еспресо',
  score: 83,
  price: 830,
  weight: 1000,
};

export const coffeeItem4: ICoffeeItem = {
  id: 4,
  img: ethiopia250,
  country: 'Ефіопія',
  region: 'Ліму',
  farm: '',
  descriptors: ['білі квіти', 'шипшина', 'абрикос'],
  type: 'зерно',
  processing: 'мита',
  roasting: 'еспресо',
  score: 85,
  price: 330,
  weight: 250,
};

export const coffeeItem5: ICoffeeItem = {
  id: 5,
  img: ethiopia250,
  country: 'Ефіопія',
  region: 'Ліму',
  farm: '',
  descriptors: ['білі квіти', 'шипшина', 'абрикос'],
  type: 'мелена',
  processing: 'мита',
  roasting: 'еспресо',
  score: 85,
  price: 330,
  weight: 250,
};

export const ourCoffeeList = [coffeeItem, coffeeItem2, coffeeItem3, coffeeItem4, coffeeItem5];

export const coffeeItem6: ICoffeeItem = {
  id: 6,
  img: kostaRica250,
  country: 'Коста Ріка',
  region: 'Нарахо',
  farm: 'Ель Перезосо',
  descriptors: ['какао', 'витримане вино', 'манго'],
  type: 'зерно',
  processing: 'натуральна',
  roasting: 'еспресо',
  score: 87,
  price: 445,
  weight: 250,
};

export const partnersCoffeeList = [coffeeItem6, coffeeItem6, coffeeItem6, coffeeItem6, coffeeItem6, coffeeItem6, coffeeItem6, coffeeItem6, coffeeItem6, coffeeItem6]
