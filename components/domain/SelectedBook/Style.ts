import styled from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";
import { font24, font50 } from "styles/font";

export const Section = styled.section`
	width: 100%;
	padding: 150px 0;
	background: ${({ theme }) => theme.colors.lightGray};
`;

export const Inner = styled.div`
	${PageInner};
	${flexbox({ jc: "between" })};
`;

export const Title = styled.h2`
	${font50(700)};
	margin-bottom: 50px;
`;

export const Description = styled.p`
	${font24(400)};
`;

export const ImgContainer = styled.div`
	${flexbox({ jc: "between" })};
	gap: 100px;
`;

export const GifWrapper = styled.div`
	position: relative;
	height: 94px;
	margin-bottom: 33px;
`;

export const BookImgWrapper = styled.div`
	position: relative;
	width: 150px;
	height: 200px;
`;
