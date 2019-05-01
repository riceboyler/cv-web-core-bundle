import PropTypes from "prop-types"
import styled from "styled-components"
import size from "../../mixins/text"
import { textBase, textProps, textDefaultProps, textSizes } from "./text"

const Span = styled.span`
    ${textBase};
    ${props => size(props.theme.bodyFontSizes[props.size])};
`

Span.propTypes = {
    ...textProps,
    size: PropTypes.oneOf([textSizes.SMALL, textSizes.MEDIUM, textSizes.LARGE]),
}

Span.defaultProps = {
    size: textSizes.MEDIUM,
    theme: {
        ...textDefaultProps.theme,
    },
}

export default Span
