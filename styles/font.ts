import { css } from "styled-components";

type Weight = 300 | 400 | 500 | 700;

export const font14 = (weight: Weight) => css`
	font-size: 14px;
	line-height: 1.714;
	font-weight: ${weight};
`;

export const font16 = (weight: Weight) => css`
	font-size: 16px;
	line-height: 1.75;
	font-weight: ${weight};
`;

export const font20 = (weight: Weight) => css`
	font-size: 20px;
	line-height: 1.8;
	font-weight: ${weight};
`;

export const font24 = (weight: Weight) => css`
	font-size: 24px;
	line-height: 1.66;
	font-weight: ${weight};
`;

export const font30 = (weight: Weight) => css`
	font-size: 30px;
	line-height: 1.06;
	font-weight: ${weight};
`;

export const font50 = (weight: Weight) => css`
	font-size: 50px;
	line-height: 1.4;
	font-weight: ${weight};
`;

export const font60 = (weight: Weight) => css`
	font-size: 60px;
	line-height: 1.333;
	font-weight: ${weight};
`;
