export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 629184,
    description: "технология NFC: Да <br> цвет: серый тип экрана: OLED, Super Retina XDR display<br>диагональ: 6 дюйм<br>размер оперативной памяти: 8 ГБ<br>процессор: 6-ядерный Apple A17 Pro<br>объем встроенной памяти: 256.0 ГБ<br>емкость аккумулятора: 4422.0 мАч"
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/