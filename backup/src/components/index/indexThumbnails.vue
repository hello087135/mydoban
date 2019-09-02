<template>
  <div class="box">
    <div class="indexThumbnails">
      <div class="left">
        <h4>{{obj.title}}</h4>
        <p>{{content}}</p>
      </div>
      <div class="right">
        <img :src="obj.image" />
      </div>
    </div>
    <p class="classify">
      <span>{{obj.category_name}}</span>
      <span>{{obj.tags}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["obj"],
  computed: {
    content() {
      let content = "";
      let temp = this.obj.content.split("<");
      content = temp[0].substring(0, 50);
      return content + "...";
    }
  }
};
</script>

<style scoped>
.indexThumbnails {
  width: 2.9rem;
  height: auto;
  display: flex;
}
.left {
  flex: 1;
}
.right {
  width: 0.6rem;
  height: auto;
  font-size: 0;
}
.right > img {
  width: 0.6rem;
  height: 100%;
}
p {
  display: flex;
  justify-content: space-between;
  color: #aaaaaa;
  font-size: 0.12rem;
}
h4 {
  font-weight: 100;
}
.box {
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #aaa;
  padding-top: 0.15rem;
}
.classify {
  margin-top: 0.1rem;
}
.left > p {
  padding-top: 0.15rem;
}
</style>