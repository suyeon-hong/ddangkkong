import * as S from "./Style";
import Image from "next/image";

const About = () => {
	return (
		<S.Section>
			<S.ImgWrapper>
				<Image
					src="/images/logo.png"
					alt="logo"
					layout="fill"
					objectFit="cover"
				/>
			</S.ImgWrapper>
			<h2>땅콩스쿨이란?</h2>
			<p>
				실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해,
				<br /> 친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인
				서비스입니다.
			</p>
		</S.Section>
	);
};

export default About;
