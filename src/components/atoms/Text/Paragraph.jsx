import PropTypes from "prop-types"
import styled from "styled-components"
import * as variables from "../../utility/variables"
import size from "../../mixins/text"
import { textBase, textProps, textDefaultProps, textSizes } from "./text"

const Paragraph = styled.p`
    ${textBase};
    ${props => size(props.theme.bodyFontSizes[props.size])};
    margin: 0 0 ${props => (props.noMargin ? 0 : variables.layout.grid(1))} 0;
    text-align: ${props => props.align || "initial"};
`

Paragraph.propTypes = {
    ...textProps,
    size: PropTypes.oneOf([textSizes.SMALL, textSizes.MEDIUM, textSizes.LARGE]),
    align: PropTypes.oneOf(["initial", "left", "center", "right"]),
}

Paragraph.defaultProps = {
    size: textSizes.MEDIUM,
    align: "initial",
    theme: {
        ...textDefaultProps.theme,
    },
}

export default Paragraph
