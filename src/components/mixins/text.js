import { css } from "styled-components"
import media from "./media"

const size = fontSizes => {
    return css`
        font-size: ${fontSizes.md};
        ${media.sm`
            font-size: ${fontSizes.xs};
        `};
    `
}

export default size
