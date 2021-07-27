export default {
  /*aUpdateInfo(context, payload) {
    setTimeout(() => {
      context.commit('updateInfo')
      console.log(payload);
      payload.message
      payload.success()
    },1000)
  }*/
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload);

        resolve('11111')
      },1000)
    })
  }
}
