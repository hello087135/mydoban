<template>
  <div>
    <index-thumbnails v-for="(v, i) in obj" :key="i" :obj="v"></index-thumbnails>
  </div>
</template>

<script>
import indexThumbnails from "./indexThumbnails";
export default {
  components: {
    indexThumbnails
  },
  created() {
    //请求数据
    this.axios.get("/shouye").then(ok => {
      console.log(ok);
      this.obj = ok.data.shouye;
    });
  },
  data() {
    return {
      obj: []
    };
  }
};
</script>

<style scoped>
</style>