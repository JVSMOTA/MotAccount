import { createGlobalStyle } from "styled-components"
import fonts from "google-fonts"

fonts.add({
    'Montserrat': ['1000', '900', '800', '700', '600', '500', '400', '300', '200', '100']
})

const ResetStyles = createGlobalStyle`

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        background-color: #FFF5EC;
    }

    h1 {
        padding: 0;
        margin: 0;
        font-size: x-large;
        text-align: center;
        color: #DB5807;
    }

    h2 {
        padding: 0;
        margin: 0;
        font-size: large;
    }

    h3 {
        padding: 0;
        margin: 0;
        font-size: medium;
    }

    p {
        padding: 0;
        margin: 0;
        text-align: justify;
        color: #DB5807; 
        font-size: medium;
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
