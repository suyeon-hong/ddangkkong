import styled from "styled-components";

export const PrevBtn = styled.div`
	position: absolute;
	top: 50%;
	left: -10.417vw;
	width: 32px;
	height: 32px;
	margin-top: -16px;
	background: url(images/prev.png) no-repeat center/cover;
	cursor: pointer;
`;

export const NextBtn = styled(PrevBtn)`
	left: auto;
	right: -10.417vw;
	transform: rotate(180deg);
`;
