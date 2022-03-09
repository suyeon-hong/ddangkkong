import * as S from "./Style";

const SelectedBook = () => {
	return (
		<S.Section>
			<S.Inner>
				<div>
					<S.Title>
						교육 전문가들이
						<br className="onlyPc" /> 선정한 도서
					</S.Title>
					<S.Description>
						호두랩스의 교육 전문가들이
						<br className="onlyPc" /> 교과 수록, 초등 필독 도서 등<br /> 아동
						교육에 적합한 도서를
						<br className="onlyPc" /> 직접 선정해요!
					</S.Description>
				</div>
				<S.ImgContainer>
					<S.Imgbox>
						<S.GifBox />
						<S.BookImg index={1}></S.BookImg>
					</S.Imgbox>
					<S.Imgbox>
						<S.GifBox />
						<S.BookImg index={2}></S.BookImg>
					</S.Imgbox>
					<S.Imgbox>
						<S.GifBox />
						<S.BookImg index={3}></S.BookImg>
					</S.Imgbox>
				</S.ImgContainer>
			</S.Inner>
		</S.Section>
	);
};

export default SelectedBook;
