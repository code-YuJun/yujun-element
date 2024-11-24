import _IconFont from './src/icon-font.vue'
import { withInstall } from '@yujun-element/utils'
const IconFont = withInstall(_IconFont)
export {
    IconFont
} 
export * from './src/icon'

declare module 'vue'{
    export interface GlobalComponents{
        Icon:typeof IconFont
    }
}
