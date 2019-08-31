<template>
  <div class="inputs">
    <enter @enter="fun1" :placeholders="placeholders.name"></enter>
    <enter @enter="fun2" :placeholders="placeholders.pass">
      <span>eye</span>
    </enter>
    <enter :placeholders="placeholders.email"></enter>
    <btn-register :username="text1" :userpass="text2" :obj="obj"></btn-register>
  </div>
</template>

<script>
import enter from "./enter";
import btnRegister from "./btn-register";
export default {
  data() {
    return {
      text1: "",
      text2: "",
      obj: {
        input1: "立即注册",
        p: "点击注册代表你已阅读并同意用户使用协议",
        a: "下载豆瓣app"
      },
      placeholders: {
        name: "用户名",
        pass: "密码",
        email: "邮箱"
      }
    };
  },
  components: {
    enter,
    btnRegister
  },
  methods: {
    fun1(val) {
      console.log(val);
      this.text1 = val;
    },
    fun2(val) {
      console.log(val);
      this.text2 = val;
    }
  }
};
</script>

<style scoped>
.inputs {
  width: 100%;
  height: 1.6rem;
}
</style>