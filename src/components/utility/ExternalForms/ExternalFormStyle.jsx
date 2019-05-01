import { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import { baseStyles as formBase } from "../../atoms/Form"
import { baseStyles as fieldSetBase } from "../../atoms/Form/FieldSet"
import { baseStyles as inputBase } from "../../atoms/Form/Inputs/Input"
import { baseStyles as radioBase } from "../../atoms/Form/Inputs/RadioButton"
import { baseStyles as checkBase } from "../../atoms/Form/Inputs/CheckBox"
import { baseStyles as errorBase } from "../../atoms/Form/ErrorMessage"
import { baseStyles as labelBase } from "../../atoms/Form/Label"
import { submitButtonBase } from "../../atoms/Button/SubmitButton"
import { textBase, textSizes } from "../../atoms/Text/text"
import { cvTheme } from "../../themes/CVThemeProvider"

const GlobalStyleWrapper = createGlobalStyle`
    form {
        ${formBase}
        input[type=date],
        input[type=datetime-local],
        input[type=datetime],
        input[type=email],
        input[type=month],
        input[type=number],
        input[type=password],
        input[type=range],
        input[type=search],
        input[type=tel],
        input[type=text],
        input[type=time],
        input[type=url],
        input[type=week],
        select,
        textarea {
            ${inputBase};
        }
        textarea{
            ${textBase};
        }
        input[type=checkbox]{
            ${checkBase};
        }
        input[type=radio]{
            ${radioBase};
        }
        input[type=submit]{
            ${submitButtonBase};
        }
        label{
            ${labelBase};
        }
        .hs-error-msgs label{
            ${errorBase};
        }
        select{
            /*
            we are not using primitive selects in our forms anymore so this is hubspot specific
            */
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+) no-repeat 99% 50%;
            background-color: white;
        }
        ul, li{
            list-style: none;
            padding:0;
            margin:0;
        }
    }
    fieldset{
        ${fieldSetBase};
        padding: 0;
    }
    .hs-form-field{
        padding: 10px 0;
    }
    /* The following styles are mostly because hubspot form field containers do not expand to fill their containers by default */
    .form-columns-2{
        width: 100%;
        & > div{
            width:50%;
            display: inline-block;
        }
        & > div:nth-child(1){
            padding-right: 5px;
        }
        & > div:nth-child(2){
            padding-left: 5px;
        }
    }
    .form-columns-1{
        width: 100%;
        & > div{
            width:100%;
            float:left;
        }
    }
    .hs-form-required{
        /* Hide injected hubspot "required" asterisk  */
        display: none;
    }
    @media (max-width: 1000px){
        /* Hubspot form field containers do not expand to fill their containers by default  */
        .form-columns-2 .hs-form-field {
            float: none;
            width: 100%;
        }
    }
`

GlobalStyleWrapper.propTypes = {
    theme: PropTypes.object.isRequired,
    size: PropTypes.oneOf([textSizes.SMALL, textSizes.MEDIUM, textSizes.LARGE]),
}

GlobalStyleWrapper.defaultProps = {
    theme: cvTheme,
    size: textSizes.MEDIUM,
}

export default GlobalStyleWrapper
