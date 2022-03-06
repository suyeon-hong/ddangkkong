import * as S from "./Style";
import Image from "next/image";
import { daily1, daily2, daily3, daily4, mobile } from "public/images";

const DailyReading = () => {
	return (
		<S.Section>
			<S.Inner>
				<S.Title>
					매일 매일
					<br /> 알아서 기록하는 독서 일기
				</S.Title>
				<S.Description>
					오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를
					통해 확인해보세요.
					<br /> 읽기만 해도 자동으로 기록되고, 공유도 가능해요.
				</S.Description>
				<S.ImgBox>
					<div>
						<S.ImgWrapper>
							<Image
								src={daily1}
								alt="daily1"
								layout="fill"
								objectFit="cover"
							/>
						</S.ImgWrapper>
						<S.ImgWrapper>
							<Image
								src={daily2}
								alt="daily2"
								layout="fill"
								objectFit="cover"
							/>
						</S.ImgWrapper>
					</div>
					<div>
						<S.ImgWrapper2>
							<Image
								src={mobile}
								alt="mobile"
								layout="fill"
								objectFit="cover"
							/>
						</S.ImgWrapper2>
					</div>
					<div>
						<S.ImgWrapper>
							<Image
								src={daily3}
								alt="daily3"
								layout="fill"
								objectFit="cover"
							/>
						</S.ImgWrapper>
						<S.ImgWrapper>
							<Image
								src={daily4}
								alt="daily4"
								layout="fill"
								objectFit="cover"
							/>
						</S.ImgWrapper>
					</div>
				</S.ImgBox>
			</S.Inner>
		</S.Section>
	);
};

export default DailyReading;
