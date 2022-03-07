import styled from "styled-components";
import { flexbox, PageInner } from "styles/commonStyle";
import { font14, font16 } from "styles/font";

export const Footer = styled.footer`
	width: 100%;
	padding: 60px 0;
`;

export const Inner = styled.div`
	${PageInner};
	${flexbox({ jc: "between" })};
`;

export const Title = styled.strong`
	${font16(700)};
	opacity: 0.8;
`;

export const Address = styled.address`
	${font14(400)};
	font-style: normal;
	margin: 20px 0;

	span {
		display: inline-block;
		margin-left: 5px;
		vertical-align: text-bottom;
		cursor: pointer;

		&::after {
			content: "";
			display: block;
			width: 100%;
			height: 1.5px;
			background: ${({ theme }) => theme.colors.primary};
			margin-top: -3px;
		}
	}
`;

export const Copyright = styled.p`
	${font14(400)};
`;

export const Utils = styled.ul`
	${flexbox({ jc: "start" })};
	gap: 20px;
	margin-bottom: 10px;

	li {
		${font16(400)};
		cursor: pointer;
	}
`;

export const SnsIcons = styled.ul`
	${flexbox({ jc: "start" })};
	gap: 20px;
	margin-top: 20px;

	li {
		width: 43px;
		height: 43px;
		border: 1.5px solid #eeeeee;
		border-radius: 50%;
		cursor: pointer;
		${flexbox};

		div {
			position: relative;
			height: 17px;
		}

		&:nth-of-type(1) div {
			width: 18px;
		}
		&:nth-of-type(2) div {
			width: 21px;
		}
	}
`;
