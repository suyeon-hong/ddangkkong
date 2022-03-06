import Image from "next/image";
import * as S from "./Style";

const LiveClass = () => {
	return (
		<S.Section>
			<S.Inner>
				<div>
					<S.Title>
						랜선 라이브
						<br className="onlyPc" />
						북클래스
					</S.Title>
					<S.Description>
						친구들과 함께
						<br className="onlyPc" /> 그림 그리기, 퀴즈 풀기.
						<br />
						선생님과 대화하며 경험해요!
					</S.Description>
				</div>
				<S.ImgWrapper>
					<Image
						src="/images/tablet.png"
						alt="tablet"
						layout="fill"
						objectFit="contain"
					/>
					<video src="/images/main_video.mp4" loop muted />
				</S.ImgWrapper>
			</S.Inner>
		</S.Section>
	);
};

export default LiveClass;
