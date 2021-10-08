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
    <virtual-list
      style="height: 400px; overflow-y: auto;"
      data-key="id"
      :data-sources="items"
      :keeps="50"
      :estimate-size="20"
      :data-component="itemComponent">
      <!-- <div>{{item.id + '   ' + item.name}}</div> -->
    </virtual-list>
  </div>
</template>

<script>
import VirtualList from 'vue-virtual-scroll-list'
import Item from './Item'
 
// Vue.use(VueVirtualScroller)

export default {
  name: 'HelloWorld',
  components: {
    VirtualList
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
