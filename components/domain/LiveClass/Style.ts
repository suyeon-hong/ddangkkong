import styled from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";
import { font24, font50 } from "styles/font";

export const Section = styled.section`
	width: 100%;
	background: url(/images/bg.png) no-repeat center/cover;
	padding: 175px 0;
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

export const ImgWrapper = styled.div`
	position: relative;
	width: 700px;
	height: 526px;

	video {
		width: 93%;
		height: 93%;
		object-fit: contain;
		border-radius: 20px;
		position: absolute;
		top: 20px;
		left: 25px;
	}
`;
