<template>
  <div>
      <van-uploader 
       v-model="fileList" 
       multiple 
       :max-count = maxNumber 
       :preview-image = previewImage 
       :preview-full-image = previewFullImage 
       :after-read="afterRead"
       />
  </div>
</template>

<script>
import { Uploader } from 'vant'
export default {
    props:['maxNumber','previewImage','previewFullImage'],
    data(){
        return {
            fileList:[]
        }
    },
    components:{
        [Uploader.name]:Uploader,
    },
    created(){},
    methods:{
        afterRead:function(file){
            // 接口访问
            // 未报错
            
        }
    },
    mounted(){

    }
}
</script>

<style>

</style>