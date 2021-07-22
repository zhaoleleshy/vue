//1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils')


console.log(add(10,30));
console.log(mul(10, 20));

//2.使用ES6的模块化的规范
import {name, age, height } from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3.依赖css
require('./css/normal.css')

//5.使用Vue进行开发
import Vue from 'vue'
import app from './vue/app'

new Vue({
    el: '#app',
    template: '<app/>',
    components: {
        app
    }
})