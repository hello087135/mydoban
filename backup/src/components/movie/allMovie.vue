<template>
  <div class="allMovie">
    <movie :obj="obj1" :title="title[0]" :key1="key1"></movie>
    <movie :obj="obj2" :title="title[1]" :key1="key1"></movie>
    <movie :obj="obj3" :title="title[2]" :key1="key1"></movie>
  </div>
</template>

<script>
//引用movies
import movie from "./movie";
export default {
  components: {
    movie
  },
  props: ["obj1", "obj2", "obj3", "title", "key1"]
};
</script>

<style scoped>
</style>