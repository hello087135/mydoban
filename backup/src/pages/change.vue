<template>
  <div class="change">
    <change-goback></change-goback>
    <change></change>
    <change-footer>o</change-footer>
  </div>
</template>

<script>
import changeGoback from "../components/change/changeGoback";
import change from "../components/change/change";
import changeFooter from "../components/change/changeFooter";
export default {
  data() {
    return {};
  },
  components: {
    changeGoback,
    change,
    changeFooter
  }
};
</script>

<style scoped>
.change {
  width: 2.9rem;
  margin: 0 auto;
}
</style>