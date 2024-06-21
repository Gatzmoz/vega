import Image from 'next/image';

export default function Home() {
	return (
		<>
			<section
				className='jumbotron h-screen'
				style={{
					background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)), url('/images/NCO08856.jpg')`,
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
						<span className='text-blue-500 text-6xl'>Vega</span>{' '}
						<br />
						<span className='text-2xl'>
							Terang Bersama Mencapai Tujuan
						</span>
					</h1>
				</div>
			</section>
			<section className='vegation mt-5 h-screen'>
				<div className='container mx-auto'>
					<h1 className='text-center text-4xl font-bold uppercase'>
						Vegation
					</h1>
				</div>
			</section>
		</>
	);
}
