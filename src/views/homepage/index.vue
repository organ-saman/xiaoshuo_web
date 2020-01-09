<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <demo btn1="登录按钮" btn2="注册按钮" @btnclick="btnClick"></demo>
  </div>
</template>

<script>
  import demo from "@/components/demo/demo"
  export default {
    name: 'homepage',
    components: {demo},
    data () {
      return {
        msg: 'homepage'
      }
    },
    methods: {
      btnClick(value){
        if(value == 1){
          this.$router.push({
            path: 'login',
            data: {
              a: "测试传值"
            }
          });
          //到跳转到的页面用this.$route取值
        }else if(value == 2){

        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
