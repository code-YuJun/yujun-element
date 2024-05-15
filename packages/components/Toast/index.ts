// 导出组件
import { createApp } from 'vue'
import Toast from './Toast.vue'
import { withInstall } from '@yujun-element/utils'

let instances = []
const computedVerticalTop = () => {
    return instances.reduce((acc,cul) => {
        return 30 + acc + 16
    },50)
}
const updateVerticalTop = () => {
    instances.forEach((instance, index) => {
        instance.props.verticalTop = computedVerticalTop();
        instance.mount(div); // 重新渲染实例
    });
}
export const showToast = (msg, options = { duration: 1500 }) => {
    const { duration } = options
    const div = document.createElement('div')
    const componentInstance = createApp(Toast, {
        show: true,
        msg,
        duration,
        verticalTop:computedVerticalTop()
    })
    instances.push(componentInstance)
    componentInstance.mount(div)
    document.body.appendChild(div)

    let timer = null
    clearTimeout(timer)
    timer = setTimeout(() => {
        componentInstance.unmount(div);
        document.body.removeChild(div);
        instances.shift()
        updateVerticalTop()
    }, duration)
}

export const ElToast = withInstall(Toast)