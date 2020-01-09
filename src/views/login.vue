<template>
  <div class="login">
    <el-form :model="loginForm" :rules="rules" ref="loginForm">
      <div class="margin-left-3">

        <el-row style="padding-top: 15px">
          <el-col :span="6">
            <el-form-item label="用户名：" prop="userName">
              <el-input v-model="loginForm.userName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-col :span="6">
            <el-form-item label="密码：" prop="passWord">
              <el-input type="password" v-model="loginForm.passWord"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

      </div>
    </el-form>

    <el-row>
      <el-col :span="6">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="">注册</el-button>
      </el-col>
    </el-row>



  </div>
</template>

<script>
  import {AJAX_URL} from '@/utils/public'
  export default {
    name: 'homepage',
    components: {},
    data () {
      return {
        loginForm:{
          userName:'',
          passWord:''
        },
        rules:{

        }
      }
    },
    methods: {
      login(){
        console.log("login:");
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
