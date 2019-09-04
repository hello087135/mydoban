<template>
  <div class="download">
    <a href="#">{{mes}}</a>
    <button class="btn-left">打开</button>
    <button class="btn-right">极速下载</button>
  </div>
</template>

<script>
export default {
  props: ["mes"]
};
</script>

<style scoped>
.download {
  width: 100%;
  height: 0.5rem;
  background: url(../../../static/img/download.jpg);
  background-size: cover;
  line-height: 0.5rem;
}
a {
  color: #42bd56;
}
.btn-left {
  width: 0.45rem;
  height: 0.3rem;
  float: right;
  margin-top: 0.1rem;
  border: none;
  outline: none;
  background: #ecf9ef;
  color: #42bd56;
  border-radius: 0.05rem;
  border: 1px solid #42bd56;
  margin-right: 0.1rem;
}
.btn-right {
  width: 0.45rem;
  height: 0.3rem;
  float: right;
  float: right;
  margin-top: 0.1rem;
  border: none;
  outline: none;
  margin-right: 0.1rem;
  border-radius: 0.05rem;
  background: #42bd56;
  color: white;
}
</style>