import styled from "styled-components";
import { font60 } from "styles/font";

export const Figure = styled.figure`
	width: 100%;
	height: 100vh;
	position: relative;
`;

export const pageInner = styled.div`
	width: ${({ theme }) => theme.breakPoint.tablet};
	position: absolute;
	top: 230px;
	left: 50%;
	transform: translateX(-50%);
	padding: 0 30px;
`;

export const TextWrapper = styled.div`
	${font60(700)};
	color: ${({ theme }) => theme.colors.white};

	.point {
		position: relative;

		.star {
			position: absolute;
			top: -25px;
			left: -20px;
			width: 50px;
			height: 50px;
		}
		.line {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 220px;
			height: 11px;
		}
	}
`;

export const imgWrapper = styled.div`
	position: absolute;
	bottom: 50px;
	left: 50%;
	cursor: pointer;
`;
