import styled from "styled-components";
import { PageInner } from "styles/commonStyle";
import { font50, font24 } from "styles/font";

export const Section = styled.section`
	width: 100%;
	padding: 150px 0;
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

export const ImgWrapper = styled.div`
	position: relative;
	width: 1140px;
	height: 730px;
	margin-left: 40px;
`;
