import PropTypes from "prop-types"
import styled from "styled-components"
import * as variables from "../../utility/variables"
import size from "../../mixins/text"
import { textBase, textDefaultProps, TextSizesEnum } from "./text"
import { ICVTheme } from "../../themes/CVThemeProvider"

enum ParagraphAlignTypes {
    INITIAL = "initial",
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
}

interface IParagraphProps {
    theme: ICVTheme
    size: TextSizesEnum
    noMargin: Boolean
    align: ParagraphAlignTypes
}

const Paragraph = styled.p`
    ${textBase};
    ${(props: IParagraphProps) => size(props.theme.bodyFontSizes[props.size])}
    margin: 0 0 ${(props: IParagraphProps) => (props.noMargin ? 0 : variables.layout.grid(1))} 0
    text-align: ${(props: IParagraphProps) => props.align || ParagraphAlignTypes.INITIAL}
`

export default Paragraph
