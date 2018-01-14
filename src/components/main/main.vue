<template>
  <div id="main">
    <div class="title">
      <span class="left"><img src="./logo.png" /><span>二手后台管理系统</span></span>
      <span class="right">
        <span class="user_name">{{datas.user.name}}</span>
        | <span class="log_out" @click.stop.prevent="log_out"><router-link to="../logIn">登出</router-link></a></span>
      </span>
    </div>
    <div class="content">
      <span class="left">
        <div class="user">
          <div class="user_img">
            <img src="./avatar_1540px_1201441_easyicon.net.png"/>
          </div>
          <div class="name">{{datas.user.name}}</div>
        </div>
        <div class="btn">
          <ul>
            <li :class="{'select': menu_select[0]}" @click.stop.prevent='select_fun(0)'><router-link to="./check_goods">审核商品</router-link></li>
            <li :class="{'select': menu_select[1]}" @click.stop.prevent="select_fun(1)"><router-link to="./my_message">查看反馈</router-link></li>
            <!-- <li :class="{'select': menu_select[2]}" @click.stop.prevent=select_fun(2)><a href="#">查看交易趋势</a></li>
            <li :class="{'select': menu_select[3]}" @click.stop.prevent=select_fun(3)><a href="#">超级权限</a></li> -->
            <li v-if="datas.user.rank === 1" :class="{'select': menu_select[4]}" @click.stop.prevent=select_fun(4)><router-link to="./add_dba">新增管理员</router-link></li>
          </ul>
        </div>
      </span>
      <span class="right">
        <router-view></router-view>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["datas"],
  data() {
    return {
      menu_select: [true,false,false,false,false]
    }
  },
  methods: {
    select_fun(index) {
      for (let i = 0; i < this.menu_select.length; i++) {
        this.menu_select[i] = false
      }
      this.menu_select[index] = true
    },
    log_out() {
        let that = this
        let option = {}
        option.method = 'get'
        option.headers = {"Content-Type": "application/json;charset=utf-8"}    
        option.url = '/unusedgoods/out'
        option.withCredentials = true
        this.$http(option).then(function (successData) {
        },(fileData) => { console.log(fileData)})
    }
  }
}
</script>
<style lang="less"  type="text/less">
@import "../../common/less/index";
#main {
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #FFF;
  .title{
    flex: 0 0 50px;
    border-bottom: 3px solid @main_color;
    position: relative;
    color: @main_color;
    span{
      display: inline-block;
    }
    .left{
      text-align: left;
      font-size: 1.23em;
      
      line-height: 50px;
      margin-left: 10px;
      img{
        margin-top: 5px;
        vertical-align: top;
        display: inline-block;
        widows: 40px;
        height: 40px;
      }
      span{
        margin-left: 8px;
        font-weight: bold;
      }
    }
    .right{
      position: absolute;
      right: 30px;
      top: 15px;
      text-align: right;
      a{
        color: @main_color;
      }
    }
  }
  .content{
    flex: 1;
    display: flex;
    .left{
      flex: 0 0 220px;
      background: @main_color;
      .user{
        .user_img{
          margin-top: 40px;
          text-align: center;
          img{
              display: inline-block;
              width: 100px;
              height: 100px; 
          }
        }
        .name{
          text-align: center;
          margin-top: 10px;
          font-size: 1.1em;
          color: #FFF;
        }
      }
      .btn{
        margin-top: 40px;
        text-align: center;
        li{
          font-size: 1em;
          line-height: 45px;
          a{
            color: #fff;
            
          }
          &:hover{
              background: #EE8484;
          }
          &.select{
            background: #EE8484;
          }
        }
      }
    }
    .right{
      flex: 1;
      margin-left: 40px;
      margin-right: 40px;
    }
  }
}
</style>
