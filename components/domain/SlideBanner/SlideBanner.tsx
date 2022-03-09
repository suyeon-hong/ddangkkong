import { logo } from "public/images";
import * as S from "./Style";
import Image from "next/image";
import { Slick } from "components/base";

const SlideBanner = () => {
	return (
		<S.Section>
			<S.Background />
			<Slick className="slideBanner">
				{comments.map((data, index) => (
					<S.Inner key={index}>
						<S.ImgContainer>
							<S.ImgWrapper>
								<Image src={logo} alt="logo" layout="fill" objectFit="cover" />
							</S.ImgWrapper>
							<S.Avatar />
						</S.ImgContainer>
						<span>{data.id}</span>
						<p>{data.con}</p>
					</S.Inner>
				))}
			</Slick>
		</S.Section>
	);
};

const comments = [
	{
		id: "dahyedahyunmom_amiejjerry",
		con: "밖에가서 놀고싶어도 “땅콩할 시간이야!” 라는 말에 군말없이 들어와 착석하는 마법같은 시간.. 줄 줄 책을 읽고 생각 말하라고 하는게 아니라, 재미있게 대화하며 반응하며 읽고, 생각을 말하게 해준다. 월, 화, 수, 목 네 권의 책을 읽었던 것을 다양한 활동으로 키워드를 통해 확실하게 기억할 수 있도록 해주는 금요일 Fun Day의 다지기 활동이 엄마로서 제일 마음에 든다!",
	},
	{
		id: "lohasunnymom",
		con: "내 방에 괴물이 나타났다! 자립심을 길러줄 수 있는 책! 땅콩리딩 말미에 책의 키워드를 알려주니 넘 좋은듯해요. 아이와 이야기를 할 때 저도 포인트를 잘 잡아줄 수 있더라고요. 이 책이 말하고 싶어하는 것이 무엇인지 아이와 이야기해보고 우리가 해야할 것들에 대해서도 재잘재잘 나누어보았죠. 우리 아이들도 방은 있지만 아직 따로 자는건 무서워하는데, 이 책을 읽더니 “엄마, 오늘은 나도 혼자 자볼래요!” 하더라고요~",
	},
];

export default SlideBanner;
