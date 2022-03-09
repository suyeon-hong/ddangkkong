import styled from "styled-components";
import { PageInner } from "styles/commonStyle";
import { font16, font20 } from "styles/font";

export const Section = styled.section`
	width: 100%;
	padding: 150px 0;
	position: relative;
	background: url(/images/slide_bg.png) no-repeat center/cover;
`;

export const Background = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: #000;
	opacity: 0.7;
`;

export const Inner = styled.div`
	${PageInner};
	text-align: center;

	span {
		display: block;
		${font16(400)};
		color: ${({ theme }) => theme.colors.white};
		opacity: 0.7;
		margin-bottom: 50px;
	}
	p {
		${font20(400)};
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const ImgContainer = styled.div`
	display: inline-block;
	width: 176px;
	height: 116.6px;
	position: relative;
	margin-bottom: 30px;
`;

export const ImgWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: inline-block;
`;

export const Avatar = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 116.6px;
	height: 100%;
	background: url("./images/slide_img.png") no-repeat center/cover;
`;
