<template>
  <div class="hello">
{{this.$store.state.test}}
  <div>{{this.$store.state.test}}</div>
  <button @click="change()">改变</button>
  <button @click="change2()">改变2</button>
  <button @click="getItem()">+获取值</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'

    }
  },
  methods:{
    change(){
      this.$store.commit('changestate',100)
      localStorage.setItem('tempState',this.$store.state.test)
    },
    change2(){
            this.$store.commit('changestate',200)
            localStorage.setItem('tempState',this.$store.state.test)
    },
    getItem(){
      console.log(localStorage.getItem('tempState'))
    }
  },
  mounted() {
    this.$http.get("/api/data",{
    }).then(function(res){
      console.log(res)
    })
    this.$httpAxios.get("/api/data",{
    }).then(function(res){
      console.log(res)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
