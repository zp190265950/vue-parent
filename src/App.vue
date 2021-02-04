<template>
  <div id="app">
    <el-menu :default-active="activeIndex" mode="horizontal" router>
      <el-menu-item index="/">基础的</el-menu-item>
      <el-menu-item index="/vue">vue</el-menu-item>
    </el-menu>
    <router-view/>
    <div id="vue"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/'
    }
  },
  watch: {
    $route: {
      handler () {
        console.log(this.$route)
        const path = this.$route.path
        console.log(path.split('/'))
        this.activeIndex = `/` + path.split('/')[1]
      }, 
      immediate: true
    }
  }
}
</script>

<style lang="less">
</style>
