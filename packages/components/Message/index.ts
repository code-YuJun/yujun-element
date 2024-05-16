// 导出组件
import { createVNode, render } from 'vue'
import Message from './Message.vue'

const instances:VNode[] = []
export const showMessage = (msg: string) => {
    let offset = 20
    instances.forEach((vm) => {
        offset += vm.el!.offsetHeight + 20
    })

    let option = {
        msg,
        offset
    }
    const container = document.createElement('div')
    const vm = createVNode(Message, option as any)
    vm.props!.onDestroy = () => {
        render(null, container) // 移除DOM
        instances.splice(instances.indexOf(vm), 1) // 从实例列表中移除销毁的组件
        updateOffsetHeight(vm.el!.offsetHeight) // 更新 offset 高度
    }
    render(vm, container)

    document.body.appendChild(container.firstElementChild)
    instances.push(vm)
}

const updateOffsetHeight = (removedHeight: number) => {
    instances.forEach((vm) => {
        vm.props!.offset -= removedHeight + 20
    })
}
