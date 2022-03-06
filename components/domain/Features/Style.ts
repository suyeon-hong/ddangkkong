import styled from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";
import { font20, font30, font50 } from "styles/font";

export const Section = styled.div`
	width: 100%;
	padding: 150px 0 0;
	background: ${({ theme }) => theme.colors.lightGray};
	text-align: center;
`;

export const Inner = styled.div`
	${PageInner};
`;

export const Title = styled.h2`
	${font50(700)};
	margin-bottom: 80px;
`;

export const BookmarkContainer = styled.div`
	${flexbox};
`;

export const BookmarkWrapper = styled.div`
	position: relative;
	width: 380px;
	height: 643px;
`;

export const BgImgWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const ContentsWrapper = styled.div`
	position: absolute;
	top: 200px;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	width: 57%;

	h3 {
		${font30(700)};
		margin-bottom: 30px;
	}
	p {
		${font20(400)};
	}
`;

export const IconWrapper = styled.div`
	position: relative;
	width: 80px;
	height: 80px;
	display: inline-block;
	margin-bottom: 50px;
`;
