<template>
  <div class="body">
    <div class="title" @click="$router.go(-1)">
      <button>
        <svg height="16" width="16" version="1.1" viewBox="0 0 1024 1024">
          <path
            d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"
          ></path>
        </svg>
        <span>Back</span>
      </button>
    </div>
    <div class="loginOut" @click="loginOut">
      <button>
        <span> 退 出 </span>
      </button>
    </div>
    <div class="menu_contain">
      <div class="menu">
        <div class="menu_item" @click="goTolist">TODOLIST</div>
        <div class="menu_item" @click="goTolist">TODOLIST</div>
        <div class="menu_item" @click="$router.push('/card')">card</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {}
  },
  methods: {
    goTolist() {
      this.$router.push('/todo')
    },
    loginOut() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.body {
  position: relative;
  width: 100%;
  height: 100%;
}
.title {
  position: absolute;
  top: 10px;
  left: 10px;
}
.menu_contain {
  /* position: flex; */
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../assets/img/file(1).jpeg');
}
.menu {
  width: 900px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.menu_item {
  width: 200px;
  height: 200px;
  border-radius: 50px;
  line-height: 200px;
  text-align: center;
  cursor: pointer;
  list-style: none;
  font-size: 20px;
  background-color: #fff;
  box-shadow: 4px 6px 14px #2F2F42;
  transition: all .3s;
}
.menu_item:hover{
  margin-top: -20px;
}
.loginOut {
  position: absolute;
  right: 1px;
  padding: 10px 10px;
}
.loginOut > button {
  width: 60px;
}
button {
  display: flex;
  height: 2em;
  /* width: 100px; */
  align-items: center;
  justify-content: center;
  background-color: #eaeaea4b;
  border-radius: 10px;
  letter-spacing: 1px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
  /* background: #fff; */
}

button > svg {
  margin-right: 3px;
  margin-left: 3px;
  font-size: 12px;
  transition: all 0.4s ease-in;
}

button:hover > svg {
  font-size: 1.2em;
  transform: translateX(-5px);
}

button:hover {
  box-shadow: 1px 1px 5px #d1d1d1, -1px -1px 5px #ffffff;
  transform: translateY(-2px);
}
</style>
