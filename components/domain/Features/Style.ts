import styled, { css } from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";
import { font20, font30, font50 } from "styles/font";

const addTransition = (index: number) => {
	return css`
		&:nth-child(${index}) {
			transition-delay: ${index * 0.5}s;
		}
	`;
};

export const BookmarkWrapper = styled.div`
	position: relative;
	width: 380px;
	height: 643px;
	transform: translateY(100px);
	transition-duration: 0.6s;
	opacity: 0;

	${addTransition(1)};
	${addTransition(2)};
	${addTransition(3)};
`;

export const Section = styled.section`
	width: 100%;
	padding: 150px 0 0;
	background: ${({ theme }) => theme.colors.lightGray};
	text-align: center;

	&.active {
		${BookmarkWrapper} {
			transform: translateY(0px);
			opacity: 1;
		}
	}
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

interface BgImgProps {
	imgSrc: StaticImageData;
}

export const BgImg = styled.div<BgImgProps>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${({ imgSrc }) => `url(${imgSrc})`};
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
