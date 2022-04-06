<template>
  <div>
    <van-nav-bar :title="navbarTitle"  :left-arrow = backBool @click-left="onClickLeft"></van-nav-bar>
  </div>
</template>

<script>
    import { NavBar,Search} from 'vant';
export default {
  props: ['navbarTitle','backBool'],
 components :{
            [NavBar.name]:NavBar,
        },
  data(){
    return{
      
    }
  },
  mounted(){
    
  },
  methods:{
    change(){
      this.$emit("testFunction","修改后的数据")
    },
    onClickLeft:function(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>