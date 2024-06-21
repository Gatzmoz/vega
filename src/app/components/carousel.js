'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
export default function Carousel({ children }) {
	const [sliderRef, instanceRef] = useKeenSlider(
		{
			slideChanged() {
				console.log('slide changed');
			},
		},
		[
			// add plugins here
		]
	);
	return (
		<div ref={sliderRef} className='keen-slider'>
			{children}
		</div>
	);
}
