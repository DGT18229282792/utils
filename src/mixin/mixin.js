let mixin = {
    data(){
        return{
            mixinData:'来自mixin的数据被展示了'
        }
    },
    methods:{
        showmixinFun:function(){
            console.log('来自mixin的方法被调用了')
        }
    },
    mounted(){
        console.log('来自mixin的mounted被调用了')
    }
}
export {
    mixin
} 