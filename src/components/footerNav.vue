<template>
  <div>
 <van-tabbar>
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
    import { Tabbar} from 'vant';
export default {
 components :{
            [Tabbar.name]:Tabbar,
        },
  data(){
      return{
           active: 0,
      }
  },
}
</script>

<style>

</style>