import { createGlobalStyle } from "styled-components";
import { PRIMARY_FONT } from "./typography";

const GlobalStyle = createGlobalStyle`
    html {
        color: ${(props) => "black"};
        font-size: 16px;
        box-sizing: border-box;
    }

    *. , *:before, *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: ${PRIMARY_FONT}
    }
`;
