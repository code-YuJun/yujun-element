<template>
  <div>
    <button @click="handleClick">消息添加</button>
  </div>
</template>
<script setup lang="ts">
import { showToast } from '@yujun-element/components/Toast/index'
function handleClick() {
  showToast('消息')
}
</script>