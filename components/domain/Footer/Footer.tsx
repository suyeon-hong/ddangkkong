import * as S from "./Style";
import { instargram, blog } from "public/images";
import Image from "next/image";

const Footer = () => {
	return (
		<S.Footer>
			<S.Inner>
				<div>
					<S.Title>(주)호두랩스</S.Title>
					<S.Address>
						대표 : 김민우 | 사업자등록번호 : 431-88-01287
						<span>사업자 정보 조회</span>
						<br />
						서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)
						<br />
						제주특별시 서귀포시 중정로 86, 304
						<br />
						통신판매업 신고번호 : 2019-서울강남-00301호
					</S.Address>
					<S.Copyright>© Hodoo Labs. ALL RIGHTS RESERVED</S.Copyright>
				</div>
				<div>
					<S.Utils>
						<li>고객센터</li>
						<li>채팅상담</li>
					</S.Utils>
					<S.Utils>
						<li>이용약관</li>
						<li>개인정보 처리방침</li>
						<li>환불정책</li>
					</S.Utils>
					<S.SnsIcons>
						<li>
							<div>
								<Image
									src={instargram}
									alt="icon"
									layout="fill"
									objectFit="contain"
								/>
							</div>
						</li>
						<li>
							<div>
								<Image
									src={blog}
									alt="icon"
									layout="fill"
									objectFit="contain"
								/>
							</div>
						</li>
					</S.SnsIcons>
				</div>
			</S.Inner>
		</S.Footer>
	);
};

export default Footer;
