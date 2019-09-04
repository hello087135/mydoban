<template>
  <div class="goback">
    <span @click="fun()">关闭</span>
    <div class="box">
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fun() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.goback {
  width: 100%;
  height: 0.6rem;
  display: flex;
}
.goback > span {
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #42bd56;
}
.box {
  margin-left: 0.1rem;
  text-align: center;
  line-height: 0.6rem;
}
.box > input {
  width: 2rem;
  height: 0.3rem;
  border-radius: 0.03rem;
  background: #f3f3f3;
  border: none;
  outline: none;
}
</style>