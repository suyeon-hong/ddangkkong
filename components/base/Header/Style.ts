import styled from "styled-components";
import { flexbox } from "styles/commonStyle";
import { font16, font20 } from "styles/font";

export const Header = styled.header`
	width: 100%;
	height: 80px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
`;

export const Inner = styled.div`
	max-width: ${({ theme }) => theme.breakPoint.tablet};
	margin: 0 auto;
	${flexbox({ jc: "between", ai: "center" })}
`;

export const Logo = styled.div`
	${flexbox};

	h1 {
		${font20(500)};
		color: ${({ theme }) => theme.colors.white};
		margin-left: 10px;
	}
`;

export const ImgWrapper = styled.div`
	width: 47px;
	height: 30px;
	position: relative;
`;

export const GNB = styled.nav`
	${flexbox}
`;

export const MainMenu = styled.ul`
	${flexbox}

	li {
		${font16(400)};
		color: ${({ theme }) => theme.colors.white};
		cursor: pointer;
		margin-right: 50px;
	}
`;

export const UtilMenu = styled(MainMenu)`
	li:first-child {
		margin-left: 50px;
		position: relative;

		&::before {
			content: "";
			display: block;
			width: 1.5px;
			height: 20px;
			background: ${({ theme }) => theme.colors.white};
			position: absolute;
			top: 50%;
			left: -50px;
			transform: translateY(-50%);
			cursor: auto;
		}
	}
`;
