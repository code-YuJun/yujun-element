<template>
    <transition name="z-message-fade" @after-leave="$emit('destroy')">
        <div class="message" v-show="visible" :style="styles">
            msg
            {{ offset }}
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted,computed } from 'vue'
interface Props {
    msg: string
    offset:number
}
const props = defineProps<Props>()
const visible = ref(false)

let timer = null
onMounted(() => {
    visible.value = true
    timer = setTimeout(() => {
        visible.value = false
    }, 1500)
})
onUnmounted(() => {
    clearTimeout(timer)
})
const styles = computed(() => {
    console.log(props.offset)
    return {top:`${props.offset}px`}
})

</script>

<style>
.message {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 300px;
    border-radius: 5px;
    background-color: red;
    line-height: 40px;
    transition: all 0.4s linear;
}

.z-message-fade-enter-from,
.z-message-fade-leave-to {
    transform: translate(-50%, -100%);
}
</style>