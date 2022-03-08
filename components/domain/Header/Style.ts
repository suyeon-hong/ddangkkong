import styled from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";

export const Header = styled.header`
	width: 100%;
	height: 80px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;

	&.active {
		background: ${({ theme }) => theme.colors.white};
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const Inner = styled.div`
	${PageInner};
	height: 100%;
	${flexbox({ jc: "between", ai: "center" })};
`;
