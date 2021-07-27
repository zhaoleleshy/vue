export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  more20Age(state) {
    return state.students.filter(s => s.age>20)
  }
}
