<template>
  <div class="inputs">
    <enter></enter>
    <enter>
      <span>eye</span>
    </enter>
    <enter></enter>
  </div>
</template>

<script>
import enter from "./enter";
export default {
  components: {
    enter
  }
};
</script>

<style scoped>
.inputs {
  width: 100%;
  height: 1.6rem;
}
</style>