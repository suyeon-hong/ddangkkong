import * as S from "./Style";
import Image from "next/image";

const Visual = () => {
	return (
		<S.Figure>
			<Image
				src="/images/figure_bg.png"
				alt="backgroundImage"
				layout="fill"
				objectFit="cover"
				property="true"
				priority
			/>
			<Image
				src="/images/figure.png"
				alt="kids"
				layout="fill"
				objectFit="cover"
				property="true"
				priority
			/>
			<S.pageInner>
				<S.TextWrapper>
					<p>책 읽는 재미,</p>
					<p>
						땅콩스쿨이
						<S.iconStar className="star" />
						<S.iconLine className="line" />
					</p>
					<p>만들어줄게요!</p>
				</S.TextWrapper>
			</S.pageInner>
			<S.imgWrapper>
				<Image
					src="/images/mouse.png"
					alt="mouse"
					width={44}
					height={44}
					className="mouse"
				/>
			</S.imgWrapper>
		</S.Figure>
	);
};

export default Visual;
