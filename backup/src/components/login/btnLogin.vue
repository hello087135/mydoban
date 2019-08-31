<template>
  <div class="btn-register">
    <input type="button" :value="obj.input1" @click="fun()" />
    <p>{{obj.p}}</p>
    <div>
      <a href="#">{{obj.a}}</a>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["username", "userpass", "obj"],
  methods: {
    fun() {
      console.log(this.username + "----" + this.userpass);
      //   1-4.判断用户名或密码是否为空
      if (this.username == "" || this.userpass == "") {
        alert("用户名或密码不能为空");
      } else {
        //向数据发送请求进行后端的验证
        //创建参数
        let usp = new URLSearchParams();
        usp.append("username", this.username);
        usp.append("userpass", this.userpass);
        this.axios.post("http:///127.0.0.1:3000/login", usp).then(ok => {
          // 打印回传数据
          if (ok.data.data == "ok") {
            alert("登录成功");
            // 4-3前段接受token
            console.log(ok.data.token);
            localStorage.setItem("token", ok.data.token);
            this.$router.push("/index");
          } else {
            alert("登录失败");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.btn-register {
  margin-top: 0.1rem;
}
.btn-register > input {
  width: 100%;
  height: 0.5rem;
  border: none;
  outline: none;
  border-radius: 0.05rem;
  background: #17aa52;
  text-align: center;
  line-height: 0.5rem;
  color: white;
}
.btn-register > p {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #aaa;
  font-size: 0.14rem;
}
.btn-register a {
  display: block;
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #42bd56;
  font-size: 0.14rem;
  flex: 1;
}
.btn-register > div {
  display: flex;
}
</style>