import * as S from "./Style";
import Image from "next/image";
import { Header } from "components/base";

const Visual = () => {
	return (
		<S.Figure>
			<Header />
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
						땅콩스쿨이
						<span className="star">
							<Image
								src="/images/star.png"
								alt="star"
								layout="fill"
								objectFit="cover"
							/>
						</span>
						<span className="line">
							<Image
								src="/images/line.png"
								alt="line"
								layout="fill"
								objectFit="cover"
							/>
						</span>
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
