import { css } from "styled-components"
import { cvTheme, ICVTheme } from "../../../themes/CVThemeProvider"

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
    color: cvTheme.text.default,
    theme: {
        fontWeights: cvTheme.fontWeights,
        bodyFontSizes: cvTheme.bodyFontSizes,
        lineHeight: cvTheme.lineHeight,
        text: cvTheme.text,
    },
    weight: TextWeightsEnum.BASE,
}

export interface ItextProps {
    color: string
    weight: TextWeightsEnum
    theme: ICVTheme
}

export const textBase = css`
    color: ${(props: ItextProps) => props.color || props.theme.text.default};
    line-height: ${(props: ItextProps) => props.theme.lineHeight};
    font-weight: ${(props: ItextProps) => {
        if (props.weight === TextWeightsEnum.BOLD) {
            return props.theme.fontWeights.bold
        }
        if (props.weight === TextWeightsEnum.BOOK) {
            return props.theme.fontWeights.book
        }
        return props.theme.fontWeights.normal
    }};
`
