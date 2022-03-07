import { logo, slide_img } from "public/images";
import * as S from "./Style";
import Image from "next/image";

const SlideBanner = () => {
	return (
		<S.Section>
			<S.Bg />
			<S.Inner>
				<S.ImgContainer>
					<S.ImgWrapper>
						<Image src={logo} alt="logo" layout="fill" objectFit="cover" />
					</S.ImgWrapper>
					<S.AvatarWrapper>
						<Image
							src={slide_img}
							alt="avatar"
							layout="fill"
							objectFit="contain"
						/>
					</S.AvatarWrapper>
				</S.ImgContainer>
				<span>dahyedahyunmom_amiejjerry</span>
				<p>
					밖에가서 놀고싶어도 “땅콩할 시간이야!” 라는 말에 군말없이 들어와
					착석하는 마법같은 시간..
					<br /> 줄 줄 책을 읽고 생각 말하라고 하는게 아니라,
					<br />
					재미있게 대화하며 반응하며 읽고, 생각을 말하게 해준다.
					<br /> 월, 화, 수, 목 네 권의 책을 읽었던 것을 다양한 활동으로
					키워드를 통해 확실하게 기억할 수 있도록 해주는 금요일 Fun Day의 다지기
					활동이 엄마로서 제일 마음에 든다!
				</p>
			</S.Inner>
			<S.PrevBtn />
			<S.NextBtn />
		</S.Section>
	);
};

export default SlideBanner;
