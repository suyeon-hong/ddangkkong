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

		span {
			overflow: unset !important;
		}
		.star {
			top: -70px !important;
			left: -40px !important;
		}
		.line {
			left: -80px !important;
			bottom: -30px !important;
		}
		.text {
			position: absolute;
			top: 0;
			left: 0;
		}
	}
`;

export const imgWrapper = styled.div`
	position: absolute;
	bottom: 50px;
	left: 50%;
	cursor: pointer;
`;
