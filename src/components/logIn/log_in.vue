<template>
  <div id="log_in">
    <div class="title_wrapper">
        <div class="wrapper">
            <span class="img_wrapper">
                <img src="./logo.png"/>
            </span><span class="title-wrappre">
                <div class="big">二手交易平台</div>
                <div class="small">SECOND-HAND TRADING PLATFORM</div>
            </span>
        </div>
        <span class="circle">
            <div class="wrapper">
                <div>账号</div>
                <div>登录</div>
            </div>
        </span>
    </div>
    <div class="input_wrapper">
        <div class="wrapper">
            <div class="title">ACCOUNT LOGIN</div>
            <div class="input">
                <span class="name">账号</span>
                <input type="number" v-model="user.account"></input>
            </div>
            <div class="input last">
                <span class="name">密码</span>
                <input type="password" v-model="user.password"></input>
            </div>
            <div class="entry_wrapper">
                <span class="btn" @click="logIn"><a href="#">登录</a></span>
            </div>
        </div>
    </div>
     <transition name="fade"> 
        <div class="prompt" v-if="prompt_show">
                <span class="wrapper"  v-if="prompt_show">
                    <div class="title2">提示</div>
                    <div class="content2">
                            {{prompt_str}}
                        <div class="btn1">
                            <span @click.stop.prevent="prompt_show = false"><a href="#">确定</a></span>
                        </div>
                    </div>
                </span>
        </div>
    </transition> 
  </div>
</template>

<script>
export default {
    props: ["datas"],
    data() {
        return {
            prompt_show: false,
            prompt_str: "",
            user: {
                account: "",
                password: ""
            }
        }
    },
    methods: {
        logIn() {
            if (this.user.account === '') {
                this.prompt_str = "请先输入账号"
                this.prompt_show = true
            }
            else if (this.user.password === '') {
                this.prompt_str = "请先输入密码"
                this.prompt_show = true
            }
            else {
                let that = this
                let option = {}
                let data = {}
                data.account = this.user.account
                data.password = this.user.password
                option.method = 'put'
                option.data = data
                option.headers = {"Content-Type": "application/json;charset=utf-8"}    
                option.url = '/unusedgoods/logIn'
                option.withCredentials = true
                this.$http(option).then(function (successData) {
                that.$nextTick(() => {
                    if (successData.data.id === -1) {
                        that.prompt_str = "账号或者密码错误"
                        that.prompt_show = true
                    }
                    else {
                        let user = {}
                        user.rank = successData.data.url
                        user.name = successData.data.value
                        that.datas.user = user
                        that.$router.push({ path: './main/check_goods' })
                    }
                })
                },(fileData) => { console.log(fileData)})
            }
        },
        account_proving_fun() {
        }
    }
}
</script>

<style lang="less"  type="text/less">
@import "../../common/less/index";
#log_in{
    flex: 1;
    display: flex;
    flex-direction: column;
    .title_wrapper{
        position: relative;
        flex: 0 0 250px;
        background: #FFF;
        .wrapper{
            width: 50%;
            margin: 0 auto;
            margin-top: 90px;
            text-align: center;
            .img_wrapper{
                display: inline-block;
                width: 75px;
                height: 75px;
                img{
                    display: block;
                    width: 75px;
                    height: 75px;
                }
            }
            .title-wrappre{
                vertical-align: top;
                display: inline-block;
                margin-left: 20px;
                margin-top: 14px;
                text-align: center;
                .big{
                    text-align: center;
                    font-size: 2.1em;
                    font-weight: bold;
                    letter-spacing: 9px;
                    margin-bottom: 10px;
                }
                .small{
                    font-size: 0.65em;
                     letter-spacing: 2px;
                }
            }

        }
        .circle{
            z-index: 999;
            position: absolute;
            bottom: -45px;
            left: 46%;
            width: 90px;
            height: 90px;
            background: #fff;
            border-radius: 45px;
            border: 2px solid @main_color;
            box-sizing: border-box;
            .wrapper{
                margin: 0 auto;
                margin-top: 18px;
                font-size: 1.33em;
                color: @main_color;
                div{
                   font-weight: bold; 
                   &:last-child{
                       margin-top: 7px;
                   }
                }

            }
        }
    }
    .input_wrapper{
        flex: 1;
        background: @main_color;
        .wrapper{
            padding: 10px 5px;
            border-radius: 2px;
            width: 30%;
            margin: 0 auto;
            margin-top: 10px;
            background: rgba(245,250,250,0.23);
            color: #FFF;
            .title{
                margin-bottom: 27px;
                margin-top: 50px;
                text-align: center;
                font-size: 1.35em;
                letter-spacing:3px;
            }
            .input{
                text-align: center;
                &.last{
                    margin-top: 10px;
                }
                span{
                    line-height: 20px;
                    font-size: 0.9em;
                    margin-right: 10px;
                }
                input{
                    width: 52%;
                    outline: none;
                    height: 22px;  
                    border-radius: 2px;
                    vertical-align: middle;
                    text-indent: 10px;
                    font-size: 0.9em;
                    color:@main_color;
                    letter-spacing: 1px;
                    &:focus{
                    color:@main_color;
                    }
                }
            }
            .recode{
                margin-top: 10px;
                text-align: center;
                &.last{
                    margin-top: 10px;
                }
                span{
                    text-align: left;
                    margin-right: 20px;
                    line-height: 25px;
                    font-size: 0.9em;
                }
                input{
                    position: relative;
                    left: -12px;
                    width: 52%;
                    outline: none;
                    height: 22px;  
                    border-radius: 2px;
                    vertical-align: middle;
                    text-indent: 10px;
                    font-size: 0.9em;
                    color:@main_color;
                    letter-spacing: 1px;
                    &:focus{
                    color:@main_color;
                    }
                }
            }
            img{
                display: block;
                width: 51.6%;
                height: 60px;
                margin-left: 30.9%;
                margin-top: 10px;
            }
            .entry_wrapper{
                margin-left: 29%;
                margin-top: 20px;
                font-size: 0.7em;
                margin-bottom: 15px;
                text-align: right;
                span{
                    margin-right: 60px;
                    a{
                        color: #FFF;
                    }
                    &.btn{
                        padding: 3px 14px;
                        // margin-left:30px;
                        font-size: 1.1em;
                        border-radius: 2px;
                        background: #CD4D4C;
                    }
                }
            }
            input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
            input[type="number"]{
                -moz-appearance: textfield;
            }
        }
    }
    .prompt{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 999;
        &.fade-enter-active,&.fade-leave-active{
            transition: all 0.33s ease-in-out;
        }
        &.fade-enter-to,&.fade-leave{
            transform: scale(1,1)
        }
        &.fade-enter,&.fade-leave-to{
            transform: scale(0,0)
        } 
        .wrapper{  
            width: 250px;
            height: 200px;
            position: absolute;
            top: 40%;
            left: 43%;
            .title2{
                line-height: 30px;
                color: #fff;
                font-size: 0.9em;
                font-weight: bold;
                letter-spacing: 1px;
                background: @main_color;
                border-radius: 5px 5px 0 0 ;
                text-align: center;
            }
            .content2{
                background: #FFF;
                padding: 10px 5px;
                border: 2px solid @main_color;
                padding-top: 25px;
                text-align: center;
                color: @main_color;
                .btn1{
                    margin-top: 10px;
                    color: #FFF;
                    text-align: right;
                    span{   
                        padding: 5px 10px;
                        display: inline-block;
                        border-radius: 3px;
                        font-size: 0.8em;
                        box-sizing: border-box;
                        &:first-child{
                            background: @main_color;
                            border: 1px solid @main_color;
                            margin-right: 12px;
                            a{
                                 color: #fff;
                            }
                            &:hover{
                               background:#e13946;
                            }
                        }
                    }
                }
            }

      
        }
    }
}
</style>