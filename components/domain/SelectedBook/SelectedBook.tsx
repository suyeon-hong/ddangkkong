import * as S from "./Style";
import Image from "next/image";
import { check1, check2, check3, book1, book2, book3 } from "public/images";
import { useEffect, useRef } from "react";

const imgList = [
	{
		gifSrc: check1,
		gitAlt: "check1",
		ImgSrc: book1,
		ImgAlt: "book1",
	},
	{
		gifSrc: check2,
		gitAlt: "check2",
		ImgSrc: book2,
		ImgAlt: "book2",
	},
	{
		gifSrc: check3,
		gitAlt: "check3",
		ImgSrc: book3,
		ImgAlt: "book3",
	},
];

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
					{imgList.map((data, index) => (
						<S.Imgbox key={index}>
							<S.GifBox />
							<S.BookImgWrapper>
								<Image
									src={data.ImgSrc}
									alt={data.ImgAlt}
									layout="fill"
									objectFit="cover"
								/>
							</S.BookImgWrapper>
						</S.Imgbox>
					))}
				</S.ImgContainer>
			</S.Inner>
		</S.Section>
	);
};

export default SelectedBook;
