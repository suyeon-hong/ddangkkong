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
			/>
			<Image
				src="/images/figure.png"
				alt="kids"
				layout="fill"
				objectFit="cover"
				property="true"
			/>
			<S.pageInner>
				<S.TextWrapper>
					<p>책 읽는 재미,</p>
					<p className="point">
						<span className="text">땅콩스쿨이</span>
						<Image
							src="/images/star.png"
							alt="star"
							width={50}
							height={50}
							className="star"
						/>
						<Image
							src="/images/line.png"
							alt="line"
							width={220}
							height={11}
							className="line"
						/>
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
