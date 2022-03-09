import * as S from "./Style";

interface ArrowBtnProps {
	onClick: React.MouseEventHandler<HTMLDivElement>;
	prev: boolean;
}

const ArrowBtn = ({ onClick, prev }: Partial<ArrowBtnProps>) => {
	if (prev) {
		return <S.PrevBtn onClick={onClick} />;
	} else {
		return <S.NextBtn onClick={onClick} />;
	}
};

export default ArrowBtn;
