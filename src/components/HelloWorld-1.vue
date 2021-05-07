<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    年龄<span>{{info.age}}</span>
    <button @click="clickAge">点击</button>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <RecycleScroller
      style="height: 420px; overflow-y: auto;"
      :item-size="25"
      key-field="id"
      :items="items"
      v-slot="{ item }">
      <div>{{item.id + '   ' + item.name}}</div>
    </RecycleScroller>
  </div>
</template>

<script>
// import VirtualList from 'vue-virtual-scroller'
// import Item from './Item'

import "vue-virtual-scroller/dist/vue-virtual-scroller.css"
import Vue from 'vue'
import VueVirtualScroller from "vue-virtual-scroller";
 
Vue.use(VueVirtualScroller)

export default {
  name: 'HelloWorld',
  components: {
    // VirtualList,
    // Item
  },
  props: {
    msg: String,
    info: Object
  },
  data () {
    return {
      items: []
    }
  },
  computed: {
    itemComponent () {
      return Item
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      const arr = []
      for (let i = 1; i <= 900000; i++) {
        arr.push({
          id: i,
          name: i + "模拟字段",
        })
      }
      this.items = arr
    },
    clickAge() {
      this.info.age--
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
