<template>
  <div class="div1">
      <button @click="sendInfo">向message2中发送数据</button>
  </div>
</template>

<script>
// import bus from '@/components/messageBus'
export default {
    data:function(){
        return{

        }
    },
    methods:{
        sendInfo:function(){
            this.$bus.$emit("sendFun","这个消息是来自message1的消息！")
        }
    }
}
</script>

<style>

</style>