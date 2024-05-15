<template>
    <transition name="message-fade" mode="out-in">
        <div v-if="isShow" class="toast" :style="computedStyle">
            {{ msg }}
        </div>
    </transition>
</template>

<script setup>
import { ref, watch,computed } from 'vue'
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    msg: {
        type: String,
        default: 'message',
    },
    duration: {
        type: Number,
        default: 1500
    },
    verticalTop:{
        type: Number,
        default: 100
    }
})

const isShow = ref(props.show)
const computedStyle = computed(() => ({'top':props.verticalTop + 'px'}))
</script>

<style scoped>
.toast {
    width: 380px;
    box-sizing: border-box;
    position: fixed;
    z-index: 9999;
    transition: top 0.5s;
    padding: 4px 8px;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 4px;
    color: #fff;
}
.message-fade-enter,
.message-fade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
</style>