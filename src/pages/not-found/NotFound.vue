<template name="页面未找到">
  <Layout id="not-found-page">
    <VanEmpty
      image="error"
      description="您访问的网页不存在"
    >
      <VanSpace>
        <VanButton size="small">返回首页</VanButton>
        <VanButton
          type="primary"
          size="small"
        >返回上一页</VanButton>
      </VanSpace>
    </VanEmpty>
  </Layout>
</template>
<script setup>
import Layout from '../../components/layout/Layout.vue'

</script>
<style lang="scss"></style>