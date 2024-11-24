import { ExtractPropTypes, PropType } from "vue";
// 类型定义
export const iconFontProps =  {
    color: String,
    size: [Number,String] as PropType<number | string>
} as const;
type IconFontProps = ExtractPropTypes<typeof iconFontProps>
