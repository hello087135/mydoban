<template>
  <div>
    <img src="../../../static/img/loading_green.c0f9be0.gif" v-if="obj.length<=0" />
    <div v-else>
      <index-thumbnails v-for="(v, i) in obj" :key="i" :obj="v"></index-thumbnails>
    </div>
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
    setTimeout(() => {
      this.axios.get("/shouye").then(ok => {
        console.log(ok);
        this.obj = ok.data.shouye;
      });
    }, 2000);
  },
  data() {
    return {
      obj: []
    };
  }
};
</script>

<style scoped>
img {
  margin-left: 1.2rem;
}
</style>