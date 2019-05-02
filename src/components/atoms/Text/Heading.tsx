import styled, { css } from "styled-components"
import size from "../../../mixins/text"
import { cvTheme, ICVTheme } from "../../../themes/CVThemeProvider"
import { textBase, textDefaultProps } from "./text"

const headingBase = css`
    margin: 0 0 ${(props: IHeadingPropTypes) => (props.noMargin ? "0" : "0.75em")} 0;
    text-align: ${(props: IHeadingPropTypes) => props.align || "left"};
    font-weight: ${(props: IHeadingPropTypes) => props.theme.fontWeights.bold};
`

enum HeadingAlignTypes {
    CENTER = "center",
    LEFT = "left",
}

interface IHeadingPropTypes {
    theme: ICVTheme
    noMargin: Boolean
    align: HeadingAlignTypes
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

H1.defaultProps = headingDefaultProps

export const H2 = styled.h2`
    ${textBase};
    ${headingBase};
    ${props => size(props.theme.headingFontSizes.h2)};
`

H2.defaultProps = headingDefaultProps

export const H3 = styled.h3`
    ${textBase};
    ${headingBase};
    ${props => size(props.theme.headingFontSizes.h3)};
`

H3.defaultProps = headingDefaultProps

export const H4 = styled.h4`
    ${textBase};
    ${headingBase};
    ${props => size(props.theme.headingFontSizes.h4)};
`

H4.defaultProps = headingDefaultProps

// NOTE: Remove in v2 style system:
export const H5 = styled.h5`
    ${textBase};
    ${headingBase};
    ${props => size(props.theme.headingFontSizes.h5)};
`

H5.defaultProps = headingDefaultProps
