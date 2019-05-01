import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import size from "../../mixins/text"
import { cvTheme } from "../../themes/CVThemeProvider"
import { textBase, textProps, textDefaultProps } from "./text"

const headingBase = css`
    margin: 0 0 ${props => (props.noMargin ? "0" : "0.75em")} 0;
    text-align: ${props => props.align || "left"};
    font-weight: ${props => props.theme.fontWeights.bold};
`

const headingPropTypes = {
    ...textProps,
    // TODO: Revisit double negative. Using this for consistency
    // with `Button`, etc.
    noMargin: PropTypes.bool,
    align: PropTypes.oneOf(["left", "center"]),
}

const headingDefaultProps = {
    noMargin: false,
    align: "left",
    theme: {
        ...textDefaultProps.theme,
        headingFontSizes: cvTheme.headingFontSizes,
    },
}

export const H1 = styled.h1`
    ${textBase};
    ${headingBase};
    ${props => size(props.theme.headingFontSizes.h1)};
`

H1.propTypes = headingPropTypes
H1.defaultProps = headingDefaultProps

export const H2 = styled.h2`
    ${textBase};
    ${headingBase};
    ${props => size(props.theme.headingFontSizes.h2)};
`

H2.propTypes = headingPropTypes
H2.defaultProps = headingDefaultProps

export const H3 = styled.h3`
    ${textBase};
    ${headingBase};
    ${props => size(props.theme.headingFontSizes.h3)};
`

H3.propTypes = headingPropTypes
H3.defaultProps = headingDefaultProps

export const H4 = styled.h4`
    ${textBase};
    ${headingBase};
    ${props => size(props.theme.headingFontSizes.h4)};
`

H4.propTypes = headingPropTypes
H4.defaultProps = headingDefaultProps

// NOTE: Remove in v2 style system:
export const H5 = styled.h5`
    ${textBase};
    ${headingBase};
    ${props => size(props.theme.headingFontSizes.h5)};
`

H5.propTypes = headingPropTypes
H5.defaultProps = headingDefaultProps
