<template>
    <i class="z-iconFont" :style="style">
        <slot></slot>
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { iconFontProps } from './icon';
import '@yujun-element/theme/index.scss'

defineOptions({
    name:'IconFont'
})
const props = defineProps(iconFontProps)
const style = computed(() => {
    if(!props.size && !props.color) return {}
    return {
        ...(props.size ? {'font-size':props.size + 'px'} : {}),
        ...(props.color ? {'color':props.color} : {})
    }
})

</script>