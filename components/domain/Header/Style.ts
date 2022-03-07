import styled from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";

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
