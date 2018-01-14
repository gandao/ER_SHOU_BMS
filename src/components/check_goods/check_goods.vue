<template>
  <div id="check_goods">
      <div class="title">
      </div>
      <ul class="main_content">
          <li v-for="(item,index) in 7" :key="index">
              <div class="title1">
                  <span class="name">用户6753</span> 提交商品
                  <span class="shop_name">超级表情表情表</span>
                  <span class="date">发布于：2017-11-17 11:30:05</span>
              </div>
              <div class="text">商品详情：个科勒最便宜多少钱</div>
              <div class="btn">
                  <span @click.stop.prevent="goods_img_show = true"><a href="#">商品图片</a></span>
                  <span @click.stop.prevent="reply_show = true;"><a href="#">通过</a></span>
                  <span><a href="#">拒绝</a></span>
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
        <div class="goods_img" v-if="goods_img_show">
                <span class="wrapper"  v-if="goods_img_show">
                    <ul>
                        <li>
                            <img src="http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d4505a82749166d224e4ade1e.jpg" />
                        </li>
                        <li>
                            <img src="http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d4505a82749166d224e4ade1e.jpg" />
                        </li>
                        <li>
                            <img src="http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d4505a82749166d224e4ade1e.jpg" />
                        </li>
                        <li>
                            <img src="http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d4505a82749166d224e4ade1e.jpg" />
                        </li>
                    </ul>
                    <span class="btn" @click.stop.prevent="goods_img_show=false"><a href="#"><i class="el-icon-close"></i></a></span>
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
            goods_img_show: false,
            goods: [],
            pager_all: 0,
            key: 0
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
        let that = this
        let option = {}
        option.method = 'get'
        option.url = '/unusedgoods/goods_noPass?start=0'
        this.$http(option).then(function (successData) {
        that.$nextTick(() => {
            console.log(successData.data)
            that.goods = successData.data.list
            that.pager_all = successData.data.allPageCount
        })
      },(fileData) => { console.log(fileData)})
    }
}
</script>

<style lang="less"  type="text/less">
@import "../../common/less/index";
#check_goods{
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
    .goods_img{
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
            position: relative;
            width: 750px;
            background: #fff;
            padding: 10px 20px;
            position: absolute;
            top: 30%;
            left: 30%;
            border: 2px solid @main_color;
            ul{
                display: flex;
                li{
                    flex: 1;
                    img{
                        display: inline-block;
                        width: 180px;
                        height: 250px;
                    }
                }
            }
            .btn{
                position: absolute;
                top: -20px;
                right: -20px;
                a{
                    width: 40px;
                    height: 40px;
                    box-sizing: border-box;
                    border-radius: 20px;
                    display: inline-block;
                    line-height: 36px;
                    text-align: center;
                    font-size: 1.4em;
                    
                    color: @main_color;
                    background: #FFF;
                    border: 2px solid @main_color;
                    i{
                        font-weight: bold;
                    }
                }
            }  
        }
    }
}

</style>