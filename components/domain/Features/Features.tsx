import * as S from "./Style";
import {
	bookmark1,
	bookmark2,
	bookmark3,
	videoclass,
	bidirectional,
	character,
} from "public/images";
import Image from "next/image";

const Features = () => {
	return (
		<S.Section>
			<S.Inner>
				<S.Title>땅콩스쿨만의 특징</S.Title>
				<S.BookmarkContainer>
					{bookmarkList.map((data, index) => (
						<S.BookmarkWrapper key={index}>
							<S.BgImgWrapper>
								<Image
									src={data.bgSrc}
									alt="bookmark"
									layout="fill"
									objectFit="cover"
								/>
							</S.BgImgWrapper>
							<S.ContentsWrapper>
								<S.IconWrapper>
									<Image
										src={data.iconSrc}
										alt="icon"
										layout="fill"
										objectFit="cover"
									/>
								</S.IconWrapper>
								<h3>{data.title}</h3>
								<p>{data.description}</p>
							</S.ContentsWrapper>
						</S.BookmarkWrapper>
					))}
				</S.BookmarkContainer>
			</S.Inner>
		</S.Section>
	);
};

const bookmarkList = [
	{
		bgSrc: bookmark1,
		iconSrc: videoclass,
		title: "화상수업",
		description:
			"휴대폰이나 태블릿으로 시간이나 장소 관계없이 편하게 수업을 들어보세요.",
	},
	{
		bgSrc: bookmark2,
		iconSrc: bidirectional,
		title: "양방향",
		description:
			"화면에 그림도 그려보고, 읽은 책으로 선생님과 퀴즈도 풀어보는 양방향 수업을 경험해보세요.",
	},
	{
		bgSrc: bookmark3,
		iconSrc: character,
		title: "화상수업",
		description: "친숙한 캐릭터와 목소리로 수업에 대한 부담을 낮춰보세요.",
	},
];

export default Features;
