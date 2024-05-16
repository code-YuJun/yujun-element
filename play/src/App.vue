<template>
  <div>
    <button @click="handleClick">消息添加</button>
  </div>
</template>
<script setup lang="ts">
import { showMessage } from '@yujun-element/components/Message/index'
function handleClick() {
  showMessage('消息出现',{
    duration:1500
  })
}
</script>