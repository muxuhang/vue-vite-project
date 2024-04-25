<!-- 
  @title 图片组件
 -->
<template>
  <VantImage
    lazy-load
    :src="src"
    :width="width"
    :height="height"
    class="img"
    :class="className"
    :alt="alt"
    :fit="fit"
    :radius="radius"
  >
    <template v-slot:loading>
      <VantLoading
        type="spinner"
        size="20"
      />
    </template>
  </VantImage>
</template>

<script setup lang="ts" name="Image">
import { ImageProps, Image as VantImage, Loading as VantLoading } from 'vant'

interface ImageComProps extends ImageProps {
  className?: string
}
const props = withDefaults(defineProps<ImageComProps>(), {
  alt: '',
  width: '100%',
  height: 'auto',
  fit: 'cover'
})
</script>

<style lang="scss"></style>
