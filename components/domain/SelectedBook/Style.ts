import styled, { css, keyframes } from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";
import { font24, font50 } from "styles/font";

const fadeIn = (index: number) => keyframes`
	0%{
		opacity: 0;
		background-image: url('/')
	}
	100%{
		opacity: 1;
		background-image: url("/images/check${index}.gif");
	}
`;

export const Imgbox = styled.div``;

export const GifBox = styled.div`
	position: relative;
	height: 94px;
	margin-bottom: 33px;
	opacity: 0;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

const putBackGroundImg = (index: number) => {
	return css`
		${Imgbox}:nth-child(${index}) {
			${GifBox} {
				animation-name: ${fadeIn(index)};
				animation-duration: 0.3s;
				animation-delay: ${index / 2}s;
				animation-fill-mode: forwards;
			}
		}
	`;
};

export const Section = styled.section`
	width: 100%;
	padding: 150px 0;
	background: ${({ theme }) => theme.colors.lightGray};

	&.active {
		${putBackGroundImg(1)}
		${putBackGroundImg(2)}
		${putBackGroundImg(3)}
	}
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

export const BookImgWrapper = styled.div`
	position: relative;
	width: 150px;
	height: 200px;
`;
