const white = "#fff"
const black = "#000"

const black15 = "rgba(0, 0, 0, 0.15)"
const black06 = "rgba(0, 0, 0, 0.6)"

// Based on ‘Main Website + Blog’ style guide:
// https://app.zeplin.io/project/5b48ed8154d08be87da31cce
const marketingBlue = "#008cfd"
const paleBlue = "rgba(229, 243, 254, .9)"

const transparentLight = "rgba(0, 0, 0, .05)"
const transparentDefault = "rgba(0, 0, 0, .15)"
const transparentDark = "rgba(0, 0, 0, .35)"
const transparentMedium = "rgba(0, 0, 0, .5)"

export const palette = {
    // colors
    white,
    black,
    black15,
    black06,
    marketingBlue,

    transparentMedium,
    transparentDefault,
    transparentDark,
    transparentLight,

    // intents (?)
    brand: "#00965e",
    default: "rgba(0, 0, 0, .9)",
    reverse: white,
    button: marketingBlue,
    buttonActive: "#1076CD",
    buttonHover: "#1996FC",
    error: "red",
    formBackground: paleBlue,
    link: "#09aeea",
    inputBackground: white,
    separator: black15,
    separatorBranded: marketingBlue,

    chanceIndicatorLow: "red",
    chanceIndicatorMedium: "#ffa800",
    chanceIndicatorHigh: "#00ba69",

    // EC activity tier pyramid
    tierScoringPyramidActive: marketingBlue,
    tierScoringPyramidInactive: paleBlue,
    tierScoringPyramidSparkles: paleBlue,
    // TODO: Find equivalent color in style guide
    // Using `transparentDefault` or `transparentLight` makes the
    // strokes invisible:
    tierScoringPyramidUnavailableFill: "rgba(196, 196, 196, 0.3)",
    tierScoringPyramidUnavailableStroke: transparentDark,
}

export const colors = {
    utility: {
        // blacks
        black03: "#b2b2b2",
        black04: "#f5f5f5",
        black06: "#666666",
        black09: "#191919",

        // greys
        shadowGray: "#e8edf1",

        // blues
        backgroundBlue: "#e5f3fe",

        // ---

        // yellows
        paleYellow: "#fff366",

        // reds
        dangerRed: "#e14436",
        dangerRedLight: "#FF4D3D",
        dangerRedDark: "#C73C2F",

        // blues
        electricBlue: "#4B13FE",

        secondaryBlue: "#008CFD",
        secondaryBlueLight: "#1996FD",
        secondaryBlueDark: "#1076CD",
    },

    brand: {
        primaryGreen: "#00BA69",
        primaryGreenDark: "#098C4F",
        primaryGreenLight: "#00C771",
    },
}

export enum zindex {
    behindContent,
    content,
    aboveContent,
    nextLevel,
    fixedOverlay,
}

export const gutterWidth: number = 15

export const layout = {
    grid: (multiple = 1) => `${multiple * gutterWidth}px`,
}
