<template>
  <div class="change">
    <changes
      v-for="(v, i) in obj"
      :key="i"
      :name="v.name"
      :des="v.des"
      :url="v.url"
      :color="v.color"
    ></changes>
  </div>
</template>
<script>
import changes from "./changes";
export default {
  data() {
    return {
      obj: []
    };
  },
  created() {
    this.axios.get("/searchClass").then(ok => {
      console.log(ok.data);
      this.obj = ok.data;
    });
  },
  components: {
    changes
  }
};
</script>
<style  scoped></style>