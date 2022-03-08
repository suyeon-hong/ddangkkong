import * as S from "./Style";
import { GNB, Logo } from "components/base";

interface HeaderProps {
	isScrollActive: boolean;
}

export default function Header({ isScrollActive }: HeaderProps) {
	return (
		<S.Header className={isScrollActive ? "active" : ""}>
			<S.Inner>
				<Logo isScrollActive={isScrollActive} />
				<GNB isScrollActive={isScrollActive} />
			</S.Inner>
		</S.Header>
	);
}
