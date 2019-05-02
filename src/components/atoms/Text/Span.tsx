import styled from "styled-components"
import size from "../../../mixins/text"
import { textBase, TextSizesEnum } from "./text"
import { ICVTheme } from "themes/CVThemeProvider"

interface ISpanPropTypes {
    theme: ICVTheme
    size: TextSizesEnum
}

const Span = styled.span`
    ${textBase};
    ${(props: ISpanPropTypes) => size(props.theme.bodyFontSizes[props.size])};
`

export default Span
