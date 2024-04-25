<!-- @format -->
<template>
  <div class="layout">
    <NavBar
      v-if="header"
      :left-arrow="back"
      @click-left="onClickLeft"
      :title="title"
    ></NavBar>
    <slot></slot>
    <VanTabbar v-if="tabbar" v-model="active" route @change="changeActive">
      <VanTabbarItem
        v-for="i in pages"
        :key="i.icon"
        replace
        :to="i.path"
        :icon="i.icon"
        >{{ i.title }}</VanTabbarItem
      >
    </VanTabbar>
  </div>
</template>

<script setup lang="ts" name="Layout">
  import {
    NavBar,
    Tabbar as VanTabbar,
    TabbarItem as VanTabbarItem,
  } from 'vant'
  import { ref } from 'vue'
  import router from '../../router'

  interface LayoutProps {
    title?: string
    back?: boolean
    header?: boolean
    tabbar?: boolean
    id?: string
    class?: string
  }
  const props = withDefaults(defineProps<LayoutProps>(), {
    title: '标题',
    back: true,
    header: true,
    tabbar: false,
  })
  const pages = [
    {
      title: '首页',
      icon: 'home-o',
      path: '/',
    },
    {
      title: '我的',
      icon: 'user-o',
      path: '/mine',
    },
  ]

  // 返回上一页
  const onClickLeft = () => {
    history.back()
  }

  // 修改索引
  const active = ref(0)
  const changeActive = index => {
    active.value = index
  }
</script>

<style lang="scss">
  .layout {
    height: 100%;
  }
</style>
