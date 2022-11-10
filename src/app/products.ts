export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Таблиця 1',
    price: 799,
    description: 'Соціальний паспорт навчального закладу'
  },
  {
    id: 2,
    name: 'Таблиця 2',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Таблиця 3',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/