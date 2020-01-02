<template>
  <div class="demo">
    <el-row>
        <el-button type="primary" @click="btnClick(1)">{{btn1}}</el-button>
        <el-button type="primary" @click="btnClick(2)">{{btn2}}</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'demo',
    props: {
      btn1: {
        type: String,
        default:"登录"
      },
      btn2: {
        type: String,
        default:"注册"
      },
    },
    data () {
      return {

      }
    },
    methods: {
      btnClick(value){
        console.log("子组件btnClick");
        this.$emit('btnclick',value);
      }
    }
  }
</script>

<style scoped>
</style>
