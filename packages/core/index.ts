import { makeInstaller } from '@yujun-element/utils'
import components from './components'
import '@yujun-element/theme/index.css'
const installer = makeInstaller(components)
export * from '@yujun-element/components'
export default installer