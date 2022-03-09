import styled from "styled-components";
import { flexbox } from "styles/commonStyle";
import { font14, font20, font50 } from "styles/font";

export const Title = styled.h2`
	${font50(700)};
	margin-bottom: 100px;
`;

export const ContentBox = styled.div`
	width: 1140px;
	height: 449px;
	background: url(images/coupon.png) no-repeat center/cover;
	display: inline-block;
	margin: 0 auto;
	${flexbox};
	gap: 200px;
	padding: 0 80px 40px 0;

	> div {
		${flexbox({ fd: "column" })}
	}
	h3 {
		${font50(400)};
	}
	p {
		margin-top: 28px;
		${font20(400)};
	}
`;

export const SpeechBubble = styled.div`
	width: 213px;
	height: 40px;
	border-radius: 50px;
	${font14(400)};
	line-height: 40px;
	color: ${({ theme }) => theme.colors.lightGray};
	background: rgba(0, 0, 0, 0.5);
	margin-bottom: 17px;
	opacity: 0;
	transform: translateY(-20px);
	transition: 0.8s 0.4s;

	&::after {
		content: "";
		display: block;
		position: relative;
		left: 50%;
		width: 0px;
		border-top: 10px solid rgba(0, 0, 0, 0.5);
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
	}
`;

export const BtnWrapper = styled.div`
	transform: translateY(-47px);
	transition: transform 0.8s;
`;

export const Section = styled.section`
	width: 100%;
	padding: 150px 0;
	background: ${({ theme }) => theme.colors.lightGray};
	text-align: center;

	&.active {
		${BtnWrapper} {
			transform: translateY(0px);
		}
		${SpeechBubble} {
			opacity: 1;
			transform: translateY(0px);
		}
	}
`;

export const btnDownload = styled.button`
	width: 257px;
	height: 70px;
	border-radius: 50px;
	padding-left: 30px;
	position: relative;
	border: none;
	background: ${({ theme }) => theme.colors.primary};
	${font20(700)};
	color: ${({ theme }) => theme.colors.lightGray};
	cursor: pointer;

	.icon {
		position: absolute;
		top: 50%;
		left: 42px;
		width: 20px;
		height: 20px;
		margin-top: -10px;
	}
`;
