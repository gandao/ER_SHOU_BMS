<template>
  <div id="add_dba">
    <div class="wrapper">
      <div class="add_btn"><span @click.stop.prevent="add_show = true;"><a href="#"><i class="el-icon-circle-plus-outline"></i>新增</a></span></div>
      <ul>
        <li v-for="(item,index) in 9" :key=index>
          <span class="name">管理员211</span>
          <span class="btn">
            <span class="right"><a href="#">删除</a></span>
          </span>
        </li>
      </ul>
    </div>
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
        <div class="add_dlg" v-if="add_show">
                
                <span class="wrapper2"  v-if="add_show">
                    <div class="title2">新增管理员</div>
                    <div class="content3">
                        <div><span class="name1">账号</span><input type="text"/></div>
                        <div><span class="name1">密码</span><input type="password"/></div>
                        <div><span class="name1">确认密码</span><input type="password"/></div>
                        <div class="btn1">
                            <span @click.stop.prevent="add_show = false;"><a href="#">确定</a></span><span @click.stop.prevent="add_show = false;"><a href="#">取消</a></span>
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
      add_show: true
    }
  }
}
</script>

<style lang="less"  type="text/less">
@import "../../common/less/index";
#add_dba{
  .wrapper{
    margin-top: 20px;
    .add_btn{
      text-align: right;
      border-bottom: 1px solid @main_color;
      padding-bottom: 10px;
      span{
        margin-right: 10px;
        a{
          font-size: 0.98em;
          font-weight: bold;
          color:@main_color;
          i{
            font-size: 1.07em;
            font-weight: bold;
            margin-right: 5px;
          }
        }
      }
    }
    ul{
      li{
        position: relative;
        padding: 20px 0;
        width: 95%;
        border-bottom: 1px solid #ECECEC;
        &:last-child{
          border-bottom: none;
        }
        .name{
          font-size: 0.9em;
          font-weight: bold;
        }
        .btn{
          position: absolute;
          top: 20px;
          right: 0px;
          a{
            background: #fff;
            color: @main_color;
          }
        }
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
  .add_dlg{
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
        .wrapper2{  
            width: 350px;
            position: absolute;
            top: 35%;
            left: 38%;
            .title2{
                line-height: 40px;
                color: #fff;
                font-size: 1.2em;
                font-weight: bold;
                letter-spacing: 4px;
                background: @main_color;
                border-radius: 5px 5px 0 0 ;
                text-align: center;
            }
            .content3{
                background: #FFF;
                padding: 10px 5px;
                border: 2px solid @main_color;
                div:first-child{
                    margin-top: 20px;
                }
                div{
                    margin-bottom: 25px;
                }
                .name1{
                    font-size: 0.9em;
                    display: inline-block;
                    width: 80px;
                    margin-left: 20px;
                    // margin-right: 10p;
                    color:#6d6d6d;
                }
                input{
                    width: 62%;
                    outline: none;
                    height: 20px;  
                    border-radius: 2px;
                    vertical-align: middle;
                    text-indent: 10px;
                    font-size: 0.9em;
                    color:@main_color;
                    letter-spacing: 1px;
                    border: 1px solid @main_color;
                    &:focus{
                    color:@main_color;
                    }
                    &::-webkit-outer-spin-button,  
                    &::-webkit-inner-spin-button{  
                    -webkit-appearance: none !important;  
                    margin: 0;  
                    }  
                }
                .btn1{
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
            }

      
        }
    }  



}
</style>