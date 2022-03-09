import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyle";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>땅콩스쿨</title>
				<meta name="title" content="땅콩스쿨 클론" />
				<meta
					name="description"
					content="땅콩스쿨 웹사이트를 클론한 사이트입니다."
				/>
				<meta name="viewport" content="width=device-width,user-scalable=no" />
				<link rel="shortcut icon" type="image/png" href="favicon.ico" />
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
