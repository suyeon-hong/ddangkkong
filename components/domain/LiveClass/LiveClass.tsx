import Image from "next/image";
import { useRef, useEffect, MutableRefObject, useState } from "react";
import * as S from "./Style";

interface LiveClassProps {
	scrollY: number;
}

const LiveClass = ({ scrollY }: LiveClassProps) => {
	const sectionRef = useRef() as MutableRefObject<HTMLDivElement>;
	const vidRef = useRef() as MutableRefObject<HTMLVideoElement>;
	const [isActive, setIsActive] = useState(false);

	const checkIsActive = () => {
		if (sectionRef.current) {
			const sectionNode = sectionRef.current;

			if (sectionNode.classList.contains("active")) {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
		}
	};

	useEffect(() => {
		checkIsActive();
		isActive && vidRef.current.play();
	}, [scrollY, isActive]);

	return (
		<S.Section ref={sectionRef}>
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
						objectFit="cover"
					/>
					<video ref={vidRef} src="/images/main_video.mp4" loop muted />
				</S.ImgWrapper>
			</S.Inner>
		</S.Section>
	);
};

export default LiveClass;
