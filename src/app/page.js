import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import Carousel from './components/carousel';
import CarouselItem from './components/carouselitem';

export default function Home() {
	return (
		<>
			<section
				className='jumbotron h-screen rounded-b-[5em]'
				style={{
					background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url('/images/NCO08856.jpg')`,
					backgroundPosition: 'bottom',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					height: '100vh',
				}}
			>
				<div className='container mx-auto pt-[1em] flex flex-col justify-center w-full align-middle'>
					<Image
						src={'/images/icon.png'}
						alt='Logo'
						width={100}
						height={100}
						className='mx-auto'
					/>
					<h1 className='font-bold text-center uppercase text-white mt-3'>
						<span className='text-vega-blue text-6xl'>Vega</span>
						<br />
						<span className='text-2xl'>
							Terang Bersama Mencapai Tujuan
						</span>
					</h1>
				</div>
			</section>
			<section className='vegation mt-5 h-screen'>
				<div className='container mx-auto flex w-full items-center'>
					<div className='vegation-title w-5/12'>
						<h1 className='text-center text-4xl font-bold uppercase'>
							<span className='text-vega-blue'>Vega</span>tion
						</h1>
					</div>
					<div className='vegation-card ms-auto w-1 w-7/12 flex justify-center'>
						<Carousel>
							<CarouselItem
								className='bg-vega-blue'
								imageUrl={'/images/icon.png'}
							></CarouselItem>
							<CarouselItem
								className='text-red'
								imageUrl={'/images/icon.png'}
							></CarouselItem>
							<CarouselItem
								className='text-red'
								imageUrl={'/images/icon.png'}
							></CarouselItem>
						</Carousel>
					</div>
				</div>
			</section>
		</>
	);
}
