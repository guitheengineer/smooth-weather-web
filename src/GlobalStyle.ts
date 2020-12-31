import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
 

    body {
        font-family: Overpass;
    }

    button {
        cursor: pointer;
        background: none;
        border: 0;
    }
    ul, li {
        list-style-type: none;
    }
`;

export default GlobalStyle;
