<template>
  <div class="log">
    <div class="logLeft">
      <img src="../../../static/img/11.png" alt />
    </div>
    <div class="logRight">
      <p>
        <b>豆瓣</b>
        写了日记
      </p>
      <p>2017-03-01&nbsp;&nbsp;19:30:41</p>
      <div class="box">
        <h4>豆瓣App 4.12.0 主要更新</h4>
        <p class="box-p">- 可以写读书笔记了，，写下阅读时的随感。来写笔记吧，你...</p>
      </div>
      <div class="footer">
        <div class="footerLeft">
          <div>
            <img src="../../../static/img/12.png" @click="fun()" />
            <span>{{text}}</span>
          </div>
          <div>
            <img src="../../../static/img/13.png" alt />
            <span>0</span>
          </div>
          <div>
            <img src="../../../static/img/14.png" alt />
            <span>1</span>
          </div>
        </div>
        <div class="footerRight">
          <img src="../../../static/img/15.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 4
    };
  },
  methods: {
    fun() {
      this.text++;
    }
  }
};
</script>

<style scoped>
.log {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  padding-bottom: 0.1rem;
  display: flex;
  border-bottom: 1px solid #aaa;
}
.logLeft {
  padding-right: 0.1rem;
}
.logLeft > img {
  width: 0.25rem;
  height: 0.25rem;
}
b {
  color: black;
}
p {
  color: #aaa;
}
.box {
  width: 2rem;
  padding: 0.1rem;
  border: 1px solid #aaa;
}
h4 {
  font-weight: 100;
}
.box-p {
  color: #aaa;
  font-size: 0.12rem;
}
.footer {
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.footerLeft span {
  color: #aaa;
  font-size: 0.12rem;
}
.footerLeft > div {
  display: inline-block;
  margin-right: 0.15rem;
}
</style>