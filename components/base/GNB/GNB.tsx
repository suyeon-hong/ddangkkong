import * as S from "./Style";

const MENU_LIST = {
	main: ["도서 구매", "장바구니", "마이페이지"],
	util: ["이용권 관리", "로그인/회원가입"],
};

interface GNBProps {
	isScrollActive: boolean;
}

const GNB = ({ isScrollActive }: GNBProps) => {
	const { main, util } = MENU_LIST;

	return (
		<S.GNB className={isScrollActive ? "active" : ""}>
			<S.MainMenu>
				{main.map((menu, index) => (
					<li key={index}>{menu}</li>
				))}
			</S.MainMenu>
			<S.UtilMenu>
				{util.map((util, index) => (
					<li key={index}>{util}</li>
				))}
			</S.UtilMenu>
		</S.GNB>
	);
};

export default GNB;
