import * as S from "./Style";
import {
	best1,
	best2,
	best3,
	best4,
	best5,
	best6,
	best7,
	best8,
	best9,
	best10,
} from "public/images";
import Image from "next/image";

const BestSeller = () => {
	return (
		<S.Section>
			<S.Inner>
				<S.Title>
					입학 전 1000권 읽기!
					<br />
					땅콩스쿨로 도전해보세요.
				</S.Title>
				<S.Description>
					매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.
					<br />
					독서를 통해 배움의 즐거움을 알아가 보세요.
				</S.Description>
			</S.Inner>
			<S.SliderWrapper>
				<S.SliderInner>
					{sliderList.map((data, index) => (
						<S.ImgWrapper key={index}>
							<Image
								src={data.imgSrc}
								alt={data.alt}
								layout="fill"
								objectFit="cover"
							/>
						</S.ImgWrapper>
					))}
				</S.SliderInner>
			</S.SliderWrapper>
		</S.Section>
	);
};

const sliderList = [
	{
		imgSrc: best1,
		alt: "커다란 순무",
	},
	{
		imgSrc: best2,
		alt: "청개구리 거울",
	},
	{
		imgSrc: best3,
		alt: "일기 쓰고 싶은 날",
	},
	{
		imgSrc: best4,
		alt: "다돼지",
	},
	{
		imgSrc: best5,
		alt: "도깨비 감투",
	},
	{
		imgSrc: best6,
		alt: "오늘은 내가 엄마",
	},
	{
		imgSrc: best7,
		alt: "응가 공주",
	},
	{
		imgSrc: best8,
		alt: "궁금해 나는 어떻게 태어났을까?",
	},
	{
		imgSrc: best9,
		alt: "냉장고 먹는 괴물",
	},
	{
		imgSrc: best10,
		alt: "고릴라",
	},
];

export default BestSeller;
