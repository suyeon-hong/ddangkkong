import * as S from "./Style";
import { GNB, Logo } from "components/base";

export default function Header() {
	return (
		<S.Header>
			<S.Inner>
				<Logo />
				<GNB />
			</S.Inner>
		</S.Header>
	);
}
