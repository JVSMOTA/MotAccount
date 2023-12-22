import { createGlobalStyle } from "styled-components"

const ResetStyles = createGlobalStyle`

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Courier New', Courier, monospace;
        background-color: #FFF1E3;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

`

export default ResetStyles
