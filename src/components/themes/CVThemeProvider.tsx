import * as React from "react"
import { ThemeProvider } from "styled-components"
import { palette, layout } from "../utility/variables"

export enum buttonTypes {
    DEFAULT = "default",
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUBMIT = "submit",
}

export interface ICVTheme {
    defaultBackground: string
    text: {
        default: string
        link: string
        reverse: string
        brandColor: string
        error: string
    }
    progress: object
    input: object
    form: object
    button: object
    fontWeights: {
        book: string
        normal: string
        bold: string
    }
    bodyFontSizes: object
    headingFontSizes: object
    fontFamily: object
    lineHeight: string
}

export const cvTheme: ICVTheme = {
    defaultBackground: palette.white,
    text: {
        default: palette.default,
        link: palette.link,
        reverse: palette.link,
        brandColor: palette.brand,
        error: palette.error,
    },
    progress: {
        background: palette.transparentLight,
        barColor: palette.link,
    },
    input: {
        background: palette.inputBackground,
        borderSize: "2px",
        borderRadius: "2px",
        borderColor: "transparent",
        placeholder: palette.transparentMedium,
    },
    form: {
        background: palette.formBackground,
    },
    button: {
        padding: `${layout.grid(0.5)} ${layout.grid(1.5)}`,
        letterSpacing: "0.5px",
        [buttonTypes.DEFAULT]: {
            border: `1px solid ${palette.buttonHover}`,
            color: palette.white,
            background: palette.button,
            backgroundActive: palette.buttonActive,
        },
        [buttonTypes.PRIMARY]: {
            border: "none",
            color: palette.white,
            background: palette.brand,
            backgroundActive: palette.brand,
        },
        [buttonTypes.SECONDARY]: {
            border: `1px solid ${palette.default}`,
            color: palette.default,
            background: palette.white,
            backgroundActive: palette.white,
        },
        [buttonTypes.SUBMIT]: {
            border: `1px solid ${palette.default}`,
            color: palette.default,
            background: palette.white,
            backgroundActive: palette.white,
        },
    },
    fontWeights: {
        book: "300",
        normal: "400",
        bold: "700",
    },
    bodyFontSizes: {
        sm: {
            md: "13px",
            xs: "15px",
        },
        md: {
            md: "17px",
            xs: "15px",
        },
        lg: {
            md: "24px",
            xs: "15px",
        },
    },
    headingFontSizes: {
        h1: {
            md: "37px",
            xs: "25px",
        },
        h2: {
            md: "33px",
            xs: "22px",
        },
        h3: {
            md: "25px",
            xs: "19px",
        },
        h4: {
            md: "19px",
            xs: "16px",
        },
        h5: {
            md: "17px",
            xs: "15px",
        },
    },
    fontFamily: {
        body: "Avenir, sans-serif",
        header: "Avenir, sans-serif",
    },
    lineHeight: "1.7em",
}

// Source: https://www.figma.com/file/dk7FenfxvJLE6yNuKRDBMSbS/Design-System-WIP?node-id=153%3A830
const fontSizes = Object.entries({
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.75rem",
    // placeholder:
    // '4xl': "2rem" ,
    "5xl": "2.5rem",
}).reduce((result, [key, value]) => {
    result[key] = { xs: value, md: value }
    return result
}, {})

export const cvTheme2: ICVTheme = {
    ...cvTheme,
    bodyFontSizes: {
        sm: fontSizes["sm"],
        md: fontSizes["base"],
        lg: fontSizes["lg"],
    },
    headingFontSizes: {
        h1: fontSizes["5xl"],
        h2: fontSizes["3xl"],
        h3: fontSizes["2xl"],
        h4: fontSizes["xl"],
        // TODO: Remove h5 heading
        h5: fontSizes["lg"],
    },
    fontFamily: {
        body: "Avenir, sans-serif",
        header: "Avenir, sans-serif",
    },
    // `em`, not `rem`, as it’s relative to the element’s font size, not the
    // root element’s:
    lineHeight: "1.5em",
}

interface ICVThemeProviderProps {
    theme: object
    children: JSX.Element
}

// V1
const CVThemeProvider = (props: ICVThemeProviderProps) => {
    const { theme, children } = props
    const mergedCVTheme = { ...cvTheme, ...theme }
    return <ThemeProvider theme={mergedCVTheme}>{children}</ThemeProvider>
}

export default CVThemeProvider

// V2
export const CVThemeProvider2 = ({ children }) => (
    <ThemeProvider theme={cvTheme2}>{children}</ThemeProvider>
)
