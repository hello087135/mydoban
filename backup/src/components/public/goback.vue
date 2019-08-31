<template>
  <div class="goback">
    <span @click="fun()">{{goback}}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["goback"],
  methods: {
    fun() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.goback {
  width: 100%;
  height: 0.6rem;
  display: flex;
}
.goback > span {
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #42bd56;
}
h3 {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  flex: 1;
}
</style>