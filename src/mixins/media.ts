import styled, { css } from "styled-components"

const breakpoints = {
    giant: 1199,
    xl: 1199,
    desktop: 992,
    lg: 992,
    tablet: 768,
    md: 768,
    phone: 576,
    sm: 576,
    smaller: 575,
    xs: 575,
}

const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args: Array<any>) => css`
        @media (max-width: ${breakpoints[label]}px) {
            ${css(args[0], ...args)};
        }
    `
    return acc
}, {})

export const MobileOnly = el => {
    return styled(el)`
        display: none;
        ${media["md"]`
            display:block;
        `};
    `
}

export const HiddenMobile = el => {
    return styled(el)`
        ${media["md"]`
            display:none;
        `};
    `
}

export default media
