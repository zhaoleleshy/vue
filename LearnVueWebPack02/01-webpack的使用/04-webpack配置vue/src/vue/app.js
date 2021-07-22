export default {
    template: `
    <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
  </div>
    `,
    data() {
        return {
            message: 'hello webpack',
            name: 'zll'
        }
    },
    methods: {
        btnClick() {
            console.log('btnClick');
        }
    }
}