import { useMemo } from "react";
import * as S from "./Style";
import Slider, { Settings } from "react-slick";
import { ArrowBtn } from "components/base";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface sliderProps {
	children: React.ReactNode;
	className?: string;
	autoplay?: boolean | number;
	speed?: number;
	loop?: boolean;
}

function Slick({
	children,
	className,
	autoplay = true,
	speed = 300,
	loop = true,
}: sliderProps) {
	const settings = useMemo<Settings>(
		() => ({
			dots: false,
			infinite: loop,
			speed: speed,
			slidesToScroll: 1,
			autoplay: Boolean(autoplay),
			autoplaySpeed: typeof autoplay === "boolean" ? 3000 : autoplay,
			nextArrow: <ArrowBtn />,
			prevArrow: <ArrowBtn prev />,
		}),
		[autoplay, loop, speed]
	);
	return (
		<S.SlideWrapper className={className}>
			<Slider {...settings}>{children}</Slider>
		</S.SlideWrapper>
	);
}

export default Slick;
