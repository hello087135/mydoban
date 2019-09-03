<template>
  <div class="groups">
    <h4>
      <img :src="obj.images.small" class="mid" />
      <span class="mid left">{{obj.title}}</span>
      <span class="right mid">{{obj.group_member}}人</span>
    </h4>
    <p>{{obj.group_topic.time}}&nbsp;&nbsp;{{obj.group_topic.title}}</p>
  </div>
</template>

<script>
export default {
  // 用来接受前段的参数
  props: ["obj"]
};
</script>

<style scoped>
.groups {
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #aaa;
}
.mid {
  vertical-align: middle;
}
.left {
  margin-left: 0.08rem;
  font-size: 0.12rem;
}
.right {
  font-weight: 100;
  margin-top: 0.08rem;
  float: right;
  font-size: 0.12rem;
  color: #aaa;
}
p {
  font-size: 0.12rem;
  color: #aaa;
}
</style>