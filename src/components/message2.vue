<template>
  <div class="div1">
      接收到的数据是：
      {{recceptData}}
  </div>
</template>

<script>
// import bus from '@/components/messageBus'
export default {
    data:function(){
        return{
recceptData:''
        }
    },
    methods:{
    },
    mounted(){
        let self = this
        this.$bus.$on("sendFun",function(msg){
            self.recceptData = msg
        })
    }
}
</script>

<style>

</style>