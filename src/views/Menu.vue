<template>
  <div class="menu_contain">
    <div class="menu">
      <div class="menu_item" @click="goTolist">TODOLIST</div>
      <div class="menu_item" @click="goTolist">TODOLIST</div>
      <div class="menu_item" @click="goTolist">TODOLIST</div>
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
    }
  }
}
</script>

<style scoped>
.menu_contain {
  /* position: flex; */
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../assets/img/file(1).jpeg');
}
.menu{
    width: 900px;
    margin: auto;
    display: flex;
    justify-content:space-around;
    align-items:center;
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
}
</style>
