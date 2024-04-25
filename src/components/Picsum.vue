<!-- 
  @title Picsum 图片组件
 -->
<template>
  <VantImage
    lazy-load
    :src="src"
    width="100%"
    class="img"
    :class="className"
    :alt="alt"
    :fit="fit"
    :radius="radius"
    :style="`padding-bottom: ${(height / width) * 100}%; height: 0`"
  >
    <template v-slot:loading>
      <VantLoading type="spinner" size="20" />
    </template>
  </VantImage>
</template>

<script setup lang="ts" name="Image">
  import { ImageProps, Image as VantImage, Loading as VantLoading } from 'vant'

  interface ImageComProps extends ImageProps {
    className?: string
    blur?: number | string
  }
  const props = withDefaults(defineProps<ImageComProps>(), {
    width: '360',
    height: '240',
    fit: 'cover',
    blur: '',
  })
  const src = `https://picsum.photos/${props.width}/${props.height}/?${
    props.blur && 'blur=' + props.blur
  }`
</script>

<style lang="scss"></style>
