<template>
  <div class="indexNavs">
    <router-link :to="toUrl">{{mes}}</router-link>
  </div>
</template>

<script>
export default {
  props: ["mes", "toUrl"]
};
</script>

<style scoped>
.indexNavs {
  width: 1.4rem;
  margin-bottom: 0.05rem;
  background: #f6f6f6;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
}
.indexNavs > a {
  color: black;
}
</style>