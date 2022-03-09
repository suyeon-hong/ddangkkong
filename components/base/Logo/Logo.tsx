import * as S from "./Style";
import Image from "next/image";

interface LogoProps {
	isScrollActive: boolean;
}

const Logo = ({ isScrollActive }: LogoProps) => {
	return (
		<S.Logo className={isScrollActive ? "active" : ""}>
			<S.Icon>
				<Image
					src="/images/logo.png"
					alt="logo"
					layout="fill"
					objectFit="contain"
				/>
			</S.Icon>
			<h1>땅콩스쿨</h1>
		</S.Logo>
	);
};

export default Logo;
