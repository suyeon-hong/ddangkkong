import {
	Header,
	Visual,
	About,
	LiveClass,
	SelectedBook,
	LiveReading,
	DailyReading,
	BestSeller,
	Features,
	SlideBanner,
	Coupon,
	Footer,
} from "components/domain";
import { useEffect, useState } from "react";
import { useScroll } from "utils/hooks/useScroll";

export default function Main() {
	const [scrollList, setScrollList] = useState<number[]>([]);
	const { scrollY } = useScroll();
	const [isScrollActive, setIsScrollActive] = useState(false);

	const addScrollList = (value: number) => {
		setScrollList((list) => [...list, value]);
	};

	useEffect(() => {
		const myScroll = document.querySelectorAll("section");

		if (myScroll !== undefined) {
			scrollList.forEach((scroll, index) => {
				if (scrollY > scroll - 300) {
					myScroll[index].classList.add("active");
				}
			});
			if (scrollY > 10) {
				setIsScrollActive(true);
			} else {
				setIsScrollActive(false);
			}
		}
	}, [scrollY, scrollList]);

	useEffect(() => {
		const myScroll = document.querySelectorAll("section");

		myScroll.forEach((value) =>
			addScrollList(value.getBoundingClientRect().top)
		);
	}, []);

	return (
		<>
			<Header isScrollActive={isScrollActive} />
			<Visual />
			<About />
			<LiveClass scrollY={scrollY} />
			<SelectedBook />
			<LiveReading />
			<DailyReading />
			<BestSeller />
			<Features />
			<SlideBanner />
			<Coupon />
			<Footer />
		</>
	);
}
