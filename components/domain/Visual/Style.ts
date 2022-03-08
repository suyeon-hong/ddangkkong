import styled, { keyframes } from "styled-components";
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

	p {
		position: relative;
	}
`;

export const iconStar = styled.span`
	position: absolute;
	top: -15px;
	left: -20px;
	width: 50px;
	height: 50px;
	background: url(/images/star.png) no-repeat center/cover;
`;

export const iconLine = styled.span`
	position: absolute;
	left: 0;
	bottom: -5px;
	width: 220px;
	height: 11px;
	background: url(/images/line.png) no-repeat center/cover;
`;

const MouseMotion = keyframes`
	0%{
		transform: translateY(0px)
	}
	20%{
		transform: translateY(-40px)
	}
	70%{
		transform: translateY(-40px)
	}
	100%{
		transform: translateY(0px)
	}
`;

export const imgWrapper = styled.div`
	position: absolute;
	bottom: 50px;
	left: 50%;
	cursor: pointer;
	animation: ${MouseMotion} 1.2s infinite ease-in-out;
`;
