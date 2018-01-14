<template>
  <div id="my_message">
      <div class="title">
          <span :class="{'selected': selected === false}" @click.stop.prevent="Not_read"><a href="#">未读的留言</a></span>
          <span :class="{'selected': selected === true}" @click.stop.prevent= "Readed"><a href="#">已读的留言</a></span>
      </div>
      <ul class="main_content">
          <li v-for="(item,index) in 7" :key="index">
              <div class="title1">
                  <span class="name">用户6753</span> 评论
                  <span class="shop_name">超级表情表情表</span>
                  <span class="date">发布于：2017-11-17 11:30:05</span>
              </div>
              <div class="text">这个科勒最便宜多少钱</div>
              <div class="btn">
                  <span @click.stop.prevent="reply_show = true;"><a href="#">回复</a></span>
                  <span><a href="#">删除</a></span>
              </div>
          </li>
      </ul>
    <div class="pager_wrapper">
        <span class="pager">
            <el-pagination
                layout="prev, pager, next"
                prev-text="上一页"
                next-text="下一页"
                :total="40"
                :page-count="13">
            </el-pagination>
        </span>
    </div>
    <transition name="fade"> 
        <div class="reply" v-if="reply_show">
                <span class="wrapper"  v-if="reply_show">
                    <div class="title">编辑回复</div>
                    <div class="content2">
                        <textarea></textarea>
                        <div class="btn">
                            <span @click.stop.prevent="reply_show = false;"><a href="#">确定</a></span><span @click.stop.prevent="reply_show = false;"><a href="#">取消</a></span>
                        </div>
                    </div>
                </span>
        </div>
    </transition>    
  </div>
</template>
<script>
export default {
    data() {
        return {
            selected: false,
            reply_show: false,
            user_message: {}
        }
    },
    methods: {
        Not_read() {
            this.selected = false
        },
        Readed() {
            this.selected = true
        }
    },
    created() {
    //     let that = this
    //     let option = {}
    //     option.method = 'get'
    //     option.url = 'http://localhost:8080/unusedgoods/user_listDialog'
    //     this.$http(option).then(function (successData) {
    //     that.$nextTick(() => {
    //         console.log(successData.data)
    //         that.user_message = successData.data
    //     })
    //   },(fileData) => { console.log(fileData)})
    }
}
</script>

<style lang="less"  type="text/less">
@import "../../common/less/index";
#my_message{
    font-size: 0.9em;
    margin-top: 30px;
    .title{
        border-bottom: 1px solid #ECECEC;
        span{
            font-size: 0.9em;
            a{
                display: inline-block;
                line-height: 28px;
            }
            &:last-child{
                margin-left: 8px;
            }
            &.selected a{
                
                font-size: 1.07em;
                font-weight: bold;
                color: @main_color;
                border-bottom: 2px solid @main_color;
            }
        }
    }
    .main_content{
        font-size: 0.9em;
        li{
            border-bottom: 1px solid #ECECEC;
            margin-top: 10px;
            padding-bottom: 5px;
            &:last-child{
                border-bottom:none;
                padding-bottom: 0;
            }
            .title1{
                position: relative;
                margin-bottom: 20px;
                .name{
                    font-size: 1.01em;
                    color:#000;
                    font-weight: bold;
                }
                .shop_name{
                    color: @main_color;
                }
                .date{
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-size: 0.8em;   
                }
            }
            .btn{
                text-align: right;
                span{
                    &:last-child{
                        margin-left: 5px;  
                    }
                    a{
                        color: @main_color;
                        &:hover{
                            color: #EF9291;
                        }
                    }
                }
            }
            .text{
                text-indent: 1.5em;
                font-size: 1.08em;
                color: #000;
                letter-spacing: 1px;
                line-height: 18px;
            }
        }
    }
    .pager_wrapper{
        margin-top: 20px;
        text-align: left;
        .pager{
            margin-right: 30px;
            text-align: right;
            li,button,span{
                line-height: 20px;
                height: 20px;
                min-width: 20px;
                color: #6D6D6D;
            }
            button{
                padding: 0;
            }
            .btn-prev{
                margin-right: 10px;
            }
            li:hover,button:hover{
                color: @main_color;
            }
            li{
                &last-child{
                    margin-right: 0;
                }
                text-align: center;
                min-width: 20px;
                margin-right: 10px;
                padding: 0;
                &.active{
                    background: @main_color;
                    color: #fff;
                    
                }  
            }
        }
    }
    .reply{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 999;
        &.fade-enter-active,&.fade-leave-active{
            transition: all 0.37s ease-in-out;
        }
        &.fade-enter-to,&.fade-leave{
            transform: scale(1,1)
        }
        &.fade-enter,&.fade-leave-to{
            transform: scale(0,0)
        } 
        .wrapper{  
            width: 300px;
            height: 200px;
            position: absolute;
            top: 30%;
            left: 40%;
            .title{
                line-height: 30px;
                color: #fff;
                font-size: 1em;
                font-weight: bold;
                letter-spacing: 4px;
                background: @main_color;
                border-radius: 5px 5px 0 0 ;
                text-align: center;
            }
            .content2{
                background: #FFF;
                padding: 10px 5px;
                border: 2px solid @main_color;
                .btn{
                    margin-bottom: 10px;
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
                            a{
                                 color: #fff;
                            }
                            &:hover{
                               background:#e13946;
                            }
                        }
                        &:last-child{
                            color: @main_color;
                            border: 1px solid @main_color;
                            margin-left: 15px;
                            margin-right: 28px;
                            a{
                                 color: @main_color;
                                 
                            }
                            &:hover{
                               background:rgba(225,57,70,0.05);
                            }
                            
                        }
                    }
                }
                textarea{
                    min-height: 100px;
                    color: #9E9CA1;
                    display: block;
                    font-size: 18px;
                    letter-spacing: 1px;
                    line-height: 20px;
                    border: none;
                    width: 95%;
                    margin: auto;
                    margin-top: 12px;
                    height: 120px;
                    outline:none;
                    resize:none;
                    overflow:hidden; 
                }
            }

      
        }
    }
}

</style>