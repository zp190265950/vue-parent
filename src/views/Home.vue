<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
