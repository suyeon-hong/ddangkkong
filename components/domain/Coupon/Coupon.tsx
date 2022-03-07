import * as S from "./Style";
import { Logo } from "components/base";
import { download } from "public/images";
import Image from "next/image";

const Coupon = () => {
	return (
		<S.Section>
			<S.Title>지금 다운로드 받으세요!</S.Title>
			<S.ContentBox>
				<div>
					<Logo />
					<h3>
						책을 보는
						<br /> 새로운 방법
					</h3>
					<p>지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!</p>
				</div>
				<div>
					<S.SpeechBubble>회원가입에 걸리는 시간 단 3초!</S.SpeechBubble>
					<S.btnDownload>
						<span className="icon">
							<Image
								src={download}
								alt="icon"
								layout="fill"
								objectFit="cover"
							/>
						</span>
						앱 다운로드 하기
					</S.btnDownload>
				</div>
			</S.ContentBox>
		</S.Section>
	);
};

export default Coupon;
