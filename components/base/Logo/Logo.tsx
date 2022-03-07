import * as S from "./Style";
import Image from "next/image";

const Logo = () => {
	return (
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
	);
};

export default Logo;
