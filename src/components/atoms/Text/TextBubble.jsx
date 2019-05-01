import styled from "styled-components"
import PropTypes from "prop-types"
import { palette, layout } from "../../utility/variables"
import { textBase, textProps, textDefaultProps, textSizes } from "./text"

const TextBubble = styled.p`
    ${textBase};
    padding: ${layout.grid(1)};
    border: 1px solid ${palette.transparentMedium};
    pointer-events: none;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(96, 99, 98, 0.25);
    min-width: 300px;
    margin: ${layout.grid(2)};
`

TextBubble.propTypes = {
    ...textProps,
    size: PropTypes.oneOf([textSizes.SMALL, textSizes.MEDIUM, textSizes.LARGE]),
}

TextBubble.defaultProps = {
    size: textSizes.MEDIUM,
    theme: {
        ...textDefaultProps.theme,
    },
}

export default TextBubble
