<template>
  <div>
    <!-- 遍历数据动态产生子组件 -->
    <group
      v-for="(v, i) in arr"
      :key="i"
      :title="v.title"
      :url="v.url"
      :name="v.name"
      :footer="v.footer"
    ></group>
  </div>
</template>

<script>
// 调用group组件;
import group from "./group";
export default {
  components: {
    group
  },
  data() {
    return {
      arr: [
        {
          title: "租房找室友",
          url: "/xiaozua",
          name: "xiaozua",
          footer: "更多相关小组"
        },
        {
          title: "来聊五块钱",
          url: "/xiaozub",
          name: "xiaozub",
          footer: "来聊五块钱"
        },
        {
          title: "买买买",
          url: "/xiaozuc",
          name: "xiaozuc",
          footer: "更多相关小组"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>