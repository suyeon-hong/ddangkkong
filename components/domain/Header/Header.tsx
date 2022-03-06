import * as S from "./Style";
import Image from "next/image";
import { GNB } from "components/base";

export default function Header() {
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
				<GNB />
			</S.Inner>
		</S.Header>
	);
}
