import styled from "styled-components"
import size from "../../../mixins/text"
import { palette, layout } from "../../../utility/variables"
import { textBase, TextSizesEnum } from "./text"
import { ICVTheme } from "themes/CVThemeProvider"

interface ITextBubbleProps {
    size: TextSizesEnum
    theme: ICVTheme
}

const TextBubble = styled.p`
    ${textBase};
    ${(props: ITextBubbleProps) => size(props.theme.bodyFontSizes[props.size])};
    padding: ${layout.grid(1)};
    border: 1px solid ${palette.transparentMedium};
    pointer-events: none;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(96, 99, 98, 0.25);
    min-width: 300px;
    margin: ${layout.grid(2)};
`

export default TextBubble
