<template>
  <div class="browses">
    <span class="left">{{mes}}</span>
    <span class="right">&gt;</span>
  </div>
</template>

<script>
export default {
  props: ["mes"]
};
</script>

<style scoped>
.browses {
  float: left;
  width: 50%;
  height: 0.5rem;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-left: none;
  line-height: 0.5rem;
  text-indent: 0.1rem;
  border-bottom: none;
}
.left {
  color: #42bd56;
}
.right {
  float: right;
  color: #aaa;
}
</style>