<!--  -->
<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <span>{{item.name}}</span>
      <info v-if="Array.isArray(item.children) && item.children.length"
        :list="item.children"></info>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang='scss'>

</style>
