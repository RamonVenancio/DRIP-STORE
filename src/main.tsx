import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  &:root{
    //Color Scale
    --Primary: #C92071;
    --Primary_G: linear-gradient(180deg, #c92071 0%, #EDABCA 100%);
    --Secundary: #B5B6F2;
    --Secundary_G:linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 100%);
    --Tertiary: #991956;
    --Error: #EE4266;
    --Sucess: #52ca76;
    --Warning: #F6AA1C;
    //____________________________________________________

    //Grays Scale
    --Dark_Gray: #1f1f1f;
    --Dark_Gray_2: #474747;
    --Dark_Gray_3: #666666;
    --Light_Gray: #8F8F8F;
    --Light_Gray_2: #CCCCCC;
    --Light_Gray_3: #F5F5F5;
    --White: #FFFFFF;
  }

`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
