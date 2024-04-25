<template>
  <Layout :header="false" :tabbar="true" id="home-page">
    <Picsum />
    aaaaaadadwadw
  </Layout>
</template>

<script setup lang="ts" name="App">
  import Picsum from '../../components/Picsum.vue'
  import Layout from '../../components/layout/Layout.vue'
  import { ref } from 'vue'

  const show = ref(false)
  const changShow = () => {
    show.value = !show.value
  }
</script>

<style scoped lang="scss">
  #home-page {
  }
</style>
