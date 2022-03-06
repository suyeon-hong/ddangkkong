import styled from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";
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
	margin-bottom: 90px;
`;

export const SliderWrapper = styled.div`
	width: 100%;
	overflow-x: hidden;
`;

export const SliderInner = styled.div`
	width: calc((150px * 10) + (50px * 9));
	${flexbox};
	gap: 50px;
`;

export const ImgWrapper = styled.div`
	position: relative;
	width: 150px;
	height: 200px;
	border-radius: 10px;
`;
