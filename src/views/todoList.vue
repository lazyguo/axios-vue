<template>
  <div class="todo_contain">
    <el-button class="todo_start" @click="isShow = true">开始</el-button>
    <div class="todo_list" v-show="isShow">
      <!-- 头部 -->
      <div class="list_header">
        <input
          type="text"
          class="list_input"
          placeholder="请输入您要添加的任务"
          v-model.trim="info"
        />
        <el-button round class="list_add" @click="addList">新建</el-button>
      </div>
      <!-- 主体部分 -->
      <div class="list_body">
        <div class="list_info" v-for="item in infoList" :key="item.id">
            <span class="info_msg">{{ item.msg }}</span>
            <span class="info_status" v-if="item.isOk == true"  style="color: #5cdc9d"
              @click="changeStatus(item)">已完成 <i class="el-icon-success"></i
            ></span>
            <span class="info_status" v-else style="color: red"
             @click="changeStatus(item)" >未完成 <i class="el-icon-error"></i
            ></span>
            <el-button class="info_del" size="mini" round type="danger" @click="removeInfo(item)">删除</el-button>
        </div>
        <div class="list_none" v-show="infoList.length === 0">666，你闲的没活吗！</div>
      </div>
      <!-- 底部 -->
      <div class="list_footer">
        <span style="font-family: STKaiti;">{{tip}}</span>
        <span>总数/完成：{{infoList.length}}/{{already}}</span>
      </div>
      <el-button @click="isShow=false" class="list_close" round>摆烂</el-button>
    </div>
  </div>
</template>

<script>
import { getRandomId } from '@/utils/utils.random'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'todo',
  data() {
    return {
      isShow: false,
      info:'',
      tipsList:[
        '嫉妒别人，仇视异己，就等于把生命交给别人.','古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。','大鹏一日同风起，扶摇直上九万里。','有遗憾是正常的。没有遗憾的人生是糊涂的人生。','恨别人，痛苦的却是自己。','儿孙自有儿孙福，莫为儿孙做远忧。','把自己的欲望降到最低点，把自己的理性升华到最高点，就是圣人。','存平等心，行方便事，则天下无事。怀慈悲心，做慈悲事，则心中太平。'
      ]
    }
  },
  computed: {
    ...mapState('d2admin/todo',['infoList']),
    tip: function() {
        return this.tipsList[Math.round(Math.random()*7)]
    }
  },
  watch:{
    infoList: {
        handler(newVal,oldVal) {
            this.already = newVal.filter(item => item.isOk == true).length
        },
        immediate:true
    }
  },
  methods: {
    addList() {
        if(this.info.length == 0) {
            this.$message.warning("请填写内容")
            return
        }
        let id = getRandomId()
        let newInfo = {
            id,
            msg: this.info,
            isOk:false
        }
        this.$store.commit('d2admin/todo/addInfo',newInfo)
        // this.infoList.push(newInfo)
        this.info = ''
    },
    removeInfo(row) {
        this.$store.commit('d2admin/todo/removeInfo',row)
    },
    changeStatus(row) {
        row.isOk = !row.isOk
        this.$store.commit('d2admin/todo/changeStatus')
    }
  }
}
</script>

<style scoped>
.todo_contain {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/img/日历.jpg') no-repeat fixed center;
}
.todo_start {
  position: absolute;
  top: 48%;
  left: 46%;
}
.todo_list {
  position: absolute;
  top: 21%;
  left: 22%;
  width: 950px;
  height: 550px;
  background-color: #93bdef;
}
.list_header {
  padding-top: 20px;
}
.list_input {
  width: 80%;
  height: 30px;
  border-radius: 25px;
  padding-left: 20px;
  outline: none;
  border-color: #dbcbcb;
}
.list_add {
    border: none;
  background-color: #dda99c;
  color: #fff;
  margin-left: 10px;
}
.list_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 0 52px;
  width: 80%;
  height: 70%;
  background-color: #fff;
  border-radius: 25px;
}
.list_none {
    position: absolute;
    top: 50%;
    font-size: 35px;
    color: rgba(220, 220, 218, .7);
}
.list_info {
  position: relative;
  width: 85%;
  height: 40px;
  border-radius: 15px;
  margin-top: 8px;
  background-color: #ffc0cb;
}
.info_msg {
  position: absolute;
  top: 10px;
  left: 15px;
  color: #fff;
}
.info_del {
  position: absolute;
  top: 6px;
  right: 15px;
}
.info_status {
  position: absolute;
  top: 10px;
  right: 90px;
  cursor: pointer;
  user-select: none;
}
.list_footer {
    display: flex;
    justify-content: space-around;
    width: 80%;
    height: 45px;
    line-height: 45px;
    margin: 10px 0 0 52px;
    border-radius:25px;
    background-color: #fff;
}
.list_close {
    position: absolute;
    bottom: 34px;
    right: 43px;
    background-color: #dda99c;
    color: #fff;
    border: none;
}
</style>
