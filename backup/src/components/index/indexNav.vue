<template>
  <div class="indexNav">
    <index-navs v-for="(v, i) in obj" :key="i" :mes="v.title" :toUrl="v.toUrl"></index-navs>
  </div>
</template>

<script>
import indexNavs from "./indexNavs";
export default {
  components: {
    indexNavs
  },
  data() {
    return {
      obj: [
        { title: "影院热映", toUrl: "/index" },
        { title: "欧美新碟版", toUrl: "/index" },
        { title: "注册账号", toUrl: "/register" },
        { title: "登录豆瓣", toUrl: "/login" }
      ]
    };
  }
};
</script>

<style scoped>
.indexNav {
  margin-top: 0.15rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>