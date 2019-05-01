import { css } from "styled-components"
import PropTypes from "prop-types"
import { cvTheme } from "../../themes/CVThemeProvider"

export enum TextWeightsEnum {
    BASE = "base",
    BOLD = "bold",
    BOOK = "book",
}

export enum TextSizesEnum {
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg",
}

export const textDefaultProps = {
    theme: {
        fontWeights: cvTheme.fontWeights,
        bodyFontSizes: cvTheme.bodyFontSizes,
        lineHeight: cvTheme.lineHeight,
        text: cvTheme.text,
    },
    weight: textWeights.BASE,
}

export interface ItextProps {
    color: string,
    weight: TextWeightsEnum,
    theme: PropTypes.object,
}

export const textBase = css`
    color: ${props => props.color || props.theme.text.default};
    line-height: ${props => props.theme.lineHeight};
    font-weight: ${props => {
        if (props.weight === textWeights.BOLD) {
            return props.theme.fontWeights.bold
        }
        if (props.weight === textWeights.BOOK) {
            return props.theme.fontWeights.book
        }
        return props.theme.fontWeights.normal
    }};
`
