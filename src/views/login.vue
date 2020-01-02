<template>
  <div class="login">
    <h2>sdfh</h2>
    <!--<el-form :model="formData" :rules="rules" ref="formData">-->
      <!--<div class="margin-left-3">-->

        <!--<el-row style="padding-top: 15px">-->
          <!--<el-col :span="6">-->
            <!--<el-form-item label="用户名：" prop="userName">-->
              <!--<el-input v-model="formData.userName"></el-input>-->
            <!--</el-form-item>-->
          <!--</el-col>-->

          <!--<el-col :span="6">-->
            <!--<el-form-item label="密码：" prop="passWord">-->
              <!--<el-input v-model="formData.passWord"></el-input>-->
            <!--</el-form-item>-->
          <!--</el-col>-->

        <!--</el-row>-->

      <!--</div>-->
    <!--</el-form>-->

    <el-button type="primary" @click="login"></el-button>


  </div>
</template>

<script>
  import {AJAX_URL} from '@/utils/public'
  export default {
    name: 'homepage',
    components: {},
    data () {
      return {
        formData:{
          userName:'',
          passWord:''
        },
        rules:{

        }
      }
    },
    methods: {
      login(){
        let form = {
          userName:this.loginForm.username,
          passWord:this.loginForm.password,
        };
        this.$http.post(AJAX_URL+"/user/login",form,{emulateJSON:true}).then((d)=>{

        })
      }
    }
  }
</script>
<style scoped>
</style>
