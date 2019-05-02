import React, { PureComponent } from "react"
import { ThemeProvider } from "styled-components"
import { palette } from "../utility/variables"
import { cvTheme } from "./CVThemeProvider"

const darkThemeOverrides = {
    text: {
        default: palette.reverse,
        link: palette.reverse,
        reverse: palette.brand,
        brandColor: palette.brand,
    },
}

const darkTheme = { ...cvTheme, ...darkThemeOverrides }

interface IDarkThemeProps {
    children: JSX.Element
}

const DarkTheme = (props: IDarkThemeProps) => {
    return <ThemeProvider theme={darkTheme}>{props.children}</ThemeProvider>
}

export default DarkTheme
