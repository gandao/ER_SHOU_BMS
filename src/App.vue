<template>
  <div id="app">
    <router-view :datas=datas></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: {
        user: {}
      }
    }
  },
  created() {
    let that = this
    let option = {}
    option.method = 'get'
    option.headers = {"Content-Type": "application/json;charset=utf-8"}    
    option.url = '/unusedgoods/user'
    option.withCredentials = true
    this.$http(option).then(function (successData) {
    that.$nextTick(() => {
        // if (successData.data.id !== 1) {
        //     let user = {}
        //     user.name = successData.data.value
        //     user.rank = successData.data.url
        //     that.datas.user = user
        //     that.$router.push({ path: './check_goods' })
        // }
    })
    },(fileData) => { console.log(fileData)})
  }
}
</script>
<style lang="less"  type="text/less">
#app{
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>
