import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
}
body {
    background-color: lightseagreen;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
}
`;
