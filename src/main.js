// require('./assets/main.css');
// var show = require('./utils/index');
// var $ = require('jquery');
// // const show = require('utils');
// show('webpack');
// $('#app').html("<h1>this is my time</h1>")

const app = 'hello world';

const foo = () => {
  console.log('dfdfd');
}

console.log(app);

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('hello worlds');
    resolve();
  }, 1000);
})

console.log(promise);