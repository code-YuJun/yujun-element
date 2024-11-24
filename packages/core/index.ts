import { makeInstaller } from '@yujun-element/utils'
import components from './components'
import '@yujun-element/theme/index.scss'
const installer = makeInstaller(components)
export * from '@yujun-element/components'
export default installer