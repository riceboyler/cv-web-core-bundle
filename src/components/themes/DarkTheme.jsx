import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { palette } from "../utility/variables"
import { cvTheme } from "../themes/CVThemeProvider"

const darkThemeOverrides = {
    text: {
        default: palette.reverse,
        link: palette.reverse,
        reverse: palette.brand,
        brandColor: palette.brand,
    },
}

const darkTheme = { ...cvTheme, ...darkThemeOverrides }

export default class DarkTheme extends React.PureComponent {
    render() {
        const { children } = this.props
        return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    }
}

DarkTheme.propTypes = {
    children: PropTypes.node.isRequired,
}
