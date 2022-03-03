import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
  body { font-family: 'Noto Sans', 'Sans-serif';}
  a { cursor: pointer; text-decoration: none; }
`;
