import styled from "styled-components";
import { font16 } from "styles/font";
import { flexbox } from "styles/commonStyle";

export const GNB = styled.nav`
	${flexbox}
`;

export const MainMenu = styled.ul`
	${flexbox}

	li {
		${font16(400)};
		color: ${({ theme }) => theme.colors.white};
		cursor: pointer;
		margin-right: 50px;
	}
`;

export const UtilMenu = styled(MainMenu)`
	li:first-child {
		margin-left: 50px;
		position: relative;

		&::before {
			content: "";
			display: block;
			width: 1.5px;
			height: 20px;
			background: ${({ theme }) => theme.colors.white};
			position: absolute;
			top: 50%;
			left: -50px;
			transform: translateY(-50%);
			cursor: auto;
		}
	}
`;
