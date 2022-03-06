import styled from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";
import { font20 } from "styles/font";

export const Header = styled.header`
	width: 100%;
	height: 80px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
`;

export const Inner = styled.div`
	${PageInner};
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
