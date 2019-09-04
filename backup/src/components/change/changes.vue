<template>
  <div class="changes">
    <h4>
      <a :href="url" :style="'color:'+color">{{name}}</a>
    </h4>
    <p>{{des}}</p>
  </div>
</template>
<script>
export default {
  props: ["name", "des", "url", "color"]
};
</script>
<style  scoped>
.changes {
  margin-top: 0.1rem;
  width: 25%;
  text-align: center;
  display: inline-block;
}
p {
  font-size: 0.12rem;
  color: #aaa;
}
</style>