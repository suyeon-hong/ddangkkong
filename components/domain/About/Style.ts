import styled from "styled-components";
import { font24, font50 } from "styles/font";

export const Section = styled.section`
	width: 100%;
	padding: 150px 0;
	text-align: center;
	color: ${({ theme }) => theme.colors.white};
	background: ${({ theme }) => theme.colors.yellow};

	h2 {
		${font50(300)};
		margin-bottom: 50px;
	}

	p {
		${font24(500)};
	}
`;

export const ImgWrapper = styled.div`
	position: relative;
	width: 94px;
	height: 60px;
	margin: 0 auto;
	margin-bottom: 30px;
`;
