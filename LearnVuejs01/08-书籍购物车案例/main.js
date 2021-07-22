const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            }
        ]
    },
    methods: {
        increment(index) {
            this.books[index].count += 1
        },
        decrement(index) {
            this.books[index].count -= 1
        },
        btnRemove(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
      totalPrice() {
          // let total = 0
          //1.普通的for循环
          /*for (let i = 0 ;i <this.books.length; i++){
              total += this.books[i].price * this.books[i].count
          }*/

          //2.for(let i in this.books)
          /*for (let i in this.books) {
              // console.log(i);  i是索引值
              total += this.books[i].price * this.books[i].count
          }*/

          //3.for(let i of this.books)
          /*for (let item of this.books) {
              total += item.price * item.count
          }*/
          return this.books.reduce(function (pre, book) {
              return pre + book.price * book.count
          }, 0)

          //reduce
      }
    },
    filters: {
        showPrice(price) {
            return '¥' + price.toFixed(2)
        }
    }
})

//编程范式: 命令式编程/声明式编程
//编程范式: 面向对象编程(第一公民是: 对象)/函数式编程(第一公民: 函数)
//filter/map/reduce
//filter中的回调函数有一个要求: 必须返回一个Boolean值
//true: 当返回值是true时,函数内部会自动这次将这次回调的n的加入到一个新数组中
//false: 当返回值false时,函数内部会自动过滤掉这次的n
const nums = [10, 20, 102, 111, 222, 40, 50]

//filter函数的使用
let newNums = nums.filter(function (n) {
    return n < 100
})
console.log(newNums);

//2.map函数的使用
let new2Nums = newNums.map(function (n) {
    return n * 2
})
console.log(new2Nums);

//new2Nums = [20, 40, 80, 100]
//3.reduce函数的使用
//reduce作用就是对数组中所有函数就行汇总
let total = new2Nums.reduce(function (preValue,n) {
    return preValue + n
}, 0)
console.log(total);
//第一次: preValue 0    n 20
//第二次: preValue 20   n 40
//第三次: preValue 60   n 80
//第四次: preValue 140  n 100  total = 240

//链式编程
let total1 = nums.filter(function (n) {  /*filter理解为过滤,处理*/
    return n < 100
}).map(function (n) {   /*map理解为映射*/
    return 2 * n
}).reduce(function (preValue,n) {  /*reduce理解为归纳*/
    return preValue + n
}, 0)
console.log(total);

//lambda表达式写法
let total2 = nums.filter(n => n < 100).map(n => 2 * n).reduce((pre,n) => pre + n)
console.log(total2);