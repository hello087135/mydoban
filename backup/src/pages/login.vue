<template>
  <div class="login">
    <goback :goback="goback">
      <h3>登录豆瓣</h3>
    </goback>
    <hr />
    <div class="inputs">
      <enter @enter="fun1" :placeholders="placeholders.name"></enter>
      <enter @enter="fun2" :placeholders="placeholders.pass">
        <span>eye</span>
      </enter>
    </div>
    <btn-login :obj="obj" :username="text1" :userpass="text2">
      <!-- <a href="#">注册豆瓣账号</a> -->
      <router-link to="/register">注册豆瓣账号</router-link>
    </btn-login>
  </div>
</template>

<script>
import enter from "../components/register/enter";
import goback from "../components/public/goback";
import btnLogin from "../components/login/btnLogin";
export default {
  components: {
    enter,
    goback,
    btnLogin
  },
  data() {
    return {
      text1: "",
      text2: "",
      placeholders: {
        name: "用户名",
        pass: "密码",
        email: "邮箱"
      },
      goback: "取消",
      obj: {
        input1: "登录",
        p: "使用其他方式登入&找回密码",
        a: "下载豆瓣app"
      }
    };
  },
  methods: {
    fun1(val) {
      this.text1 = val;
    },
    fun2(val) {
      this.text2 = val;
    }
  }
};
</script>

<style scoped>
.login {
  width: 2.9rem;
  margin: 0 auto;
}
.inputs {
  margin-top: 0.1rem;
}
</style>