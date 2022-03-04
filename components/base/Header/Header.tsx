import * as S from "./Style";
import Image from "next/image";

const GNB = {
	main: ["도서 구매", "장바구니", "마이페이지"],
	util: ["이용권 관리", "로그인/회원가입"],
};

export default function Header() {
	const { main, util } = GNB;

	return (
		<S.Header>
			<S.Inner>
				<S.Logo>
					<S.ImgWrapper>
						<Image
							src="/images/logo.png"
							alt="logo"
							layout="fill"
							objectFit="cover"
						/>
					</S.ImgWrapper>
					<h1>땅콩스쿨</h1>
				</S.Logo>
				<S.GNB>
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
			</S.Inner>
		</S.Header>
	);
}
