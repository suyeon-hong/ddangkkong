import styled from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";
import { font50, font24 } from "styles/font";

export const Section = styled.section`
	width: 100%;
	padding: 150px 0;
	background: ${({ theme }) => theme.colors.lightGray};
`;

export const Inner = styled.div`
	${PageInner};
	text-align: center;
`;

export const Title = styled.h2`
	${font50(700)};
	margin-bottom: 50px;
`;

export const Description = styled.p`
	${font24(400)};
	margin-bottom: 100px;
`;

export const ImgBox = styled.div`
	${flexbox};
	gap: 50px;
`;

export const ImgWrapper = styled.div`
	position: relative;
	width: 368px;
	height: 208px;

	&:first-child {
		margin-bottom: 50px;
	}
`;

export const ImgWrapper2 = styled.div`
	position: relative;
	width: 303px;
	height: 600px;
`;
