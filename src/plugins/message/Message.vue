<template>
  <div ref="messageVueRef" class="messageVue" :class="{isShowActive:showStatus}">
      这是通知消息
  </div>
</template>

<script>
export default {
    name:'Dmessage',
    data(){
        return{
            showStatus:false,
        }
    },
    methods:{
        MessageFun(isShow=false){
            this.showStatus = isShow
            setTimeout(()=>{
                this.showStatus = false
            },2000)
        }
    }
}
</script>

<style>
.messageVue{
    display: none;
    width: 150px;
    height: 30px;
    background: rgba(0,0,0,0.8);
    color: #fff;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
}
.isShowActive{
    display: block;
     background: rgba(0,0,0,0.8);
    width: 150px;
    height: 30px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 1;
}
</style>