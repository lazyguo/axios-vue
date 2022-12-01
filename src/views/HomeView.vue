<template>
  <div class="home">
    <div class="loginOut" @click="loginOut">退出</div>
    <div class="contain">
      <div class="portrait">
        <div class="inside_head">女</div>
        <div class="head">
          <img src="../assets/img/cool.webp" />
        </div>
        <h1>RanBaBY</h1>
        <p>永 远 相 信 美 好 的 事 情 即 将 发 生</p>
        <span class="tips" style="font-family: STKaiti">{{ tip }}</span>
        <div class="butn" @click="goToMenu">我的主页</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {
    ...mapState('d2admin/todo', ['tipsList']),
    tip: function () {
      return this.tipsList[Math.round(Math.random() * 7)]
    }
  },
  methods: {
    loginOut() {
      this.$router.push('/')
    },
    goToMenu() {
      this.$router.push('/menu')
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url('../assets/img/th (1).jpg');
  background-size: cover;
  .loginOut {
    float: right;
    margin: 10px 10px;
    width: 50px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ccc;
    font-size: 12px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
  }
  .contain {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    .portrait {
      width: 500px;
      height: 600px;
      // background: rgba(255, 255, 255, 0.7);
      .inside_head{
        background-color: rgb(73, 42, 42);
        color: #fff;
        line-height: 110px;
        font-size: 24px;
        font-weight: 200;
      }
      .inside_head,
      .head {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin: 10px auto;
        border: 2px solid rgb(189, 189, 189);
        overflow: hidden;
      }
      .head {
        position: absolute;
        top: 210px;
        left: 790px;
        transition: 0.8s;
        cursor: pointer;
        z-index: 999;
        &:hover {
          // display: none;
          transform-origin: 0 50%;
          transform: rotateY(180deg);
        }
        img {
          width: 100%;
          height: 100%;
        }
      }

      h1 {
        color: rgb(217, 217, 217);
        font-weight: 400;
      }
      .tips {
        display: inline-block;
        padding-top: 40px;
        color: #fff;
      }
      p {
        // display: inline-block;
        color: #fff;
        font-size: 18px;
        font-weight: 100;
      }
      .butn {
        width: 120px;
        height: 40px;
        margin: 60px auto;
        line-height: 40px;
        border: 1px solid #ccc;
        border-radius: 30px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
