export default function CarouselItem({
	imageUrl,
	className,
	altName,
	children,
}) {
	return (
		<div className={`keen-slider__slide ${className}`}>
			<img src={imageUrl} alt={altName} />
			{children}
		</div>
	);
}
