import styled from "styled-components";
import { font20 } from "styles/font";
import { flexbox } from "styles/commonStyle";

export const Icon = styled.div`
	width: 47px;
	height: 30px;
	position: relative;
`;

export const Logo = styled.div`
	${flexbox};

	h1 {
		${font20(500)};
		color: ${({ theme }) => theme.colors.white};
		margin-left: 10px;
	}

	&.active {
		${Icon} {
			filter: brightness(0);
		}
		h1 {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
