require('./assets/main.css');
// const show = require('./utils/index');
const show = require('utils');
show('webpack');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000);
//   reject();
// })

// promise.then(value => {
//   console.log('cccccccccc')
// })
// class Man {
//   constructor(name) {
//     this.name = '小豪';
//   }
//   console() {
//     console.log(this.name);
//   }
// }
// const man = new Man('小豪');
// man.console(); // 小豪

// const arr = [1, 2, [3, 4]].flat(Infinity); // [1, 2, 3, 4]
// console.log(arr);

function a(num: number) {
  return num + 1;
}