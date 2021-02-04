<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-tooltip
      popper-class="tooltip-width"
      placement="top">
      <span slot="content" class="tooltip-text">asdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
      <span class="text">tooltip</span>
    </el-tooltip>
    <info :list="list"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Info from './../components/Info'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Info
  },
  data () {
    return {

    }
  },
  computed: {
    list () {
      return [
        {
          name: '张三',
          children: [
            {
              name: '张三孩子'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .tooltip-width {
  max-width: 100px;
}
.tooltip-text {
  max-width: 100px;
  display: inline-block;
}
.text {
  color: red;
}
</style>
