import * as S from "./Style";
import { liveReading } from "public/images";
import Image from "next/image";

const LiveReading = () => {
	return (
		<S.Section>
			<S.Inner>
				<S.Title>
					실시간 방송 형태로 제공되는
					<br /> 신개념 책 읽기
				</S.Title>
				<S.Description>
					방송 중이라면 언제든 접속하세요.
					<br /> 수강신청, 수업예약 없이 편하게 수업참여가 가능해요.
				</S.Description>
				<S.ImgWrapper>
					<Image
						src={liveReading}
						alt="liveReading"
						layout="fill"
						objectFit="contain"
					/>
				</S.ImgWrapper>
			</S.Inner>
		</S.Section>
	);
};

export default LiveReading;
