import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		breakPoint: {
			tablet: string;
			mobile: string;
		};

		colors: {
			primary: string;
			white: string;
			yellow: string;
			lightGray: string;
			border: string;
		};
	}
}
