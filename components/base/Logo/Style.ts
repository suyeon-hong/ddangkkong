import styled from "styled-components";
import { font20 } from "styles/font";
import { flexbox } from "styles/commonStyle";

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
