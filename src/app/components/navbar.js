'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
	const route = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = window.scrollY > 0;
			setIsScrolled(scroll);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const navLinks = [
		{
			name: 'Artikel',
			link: '/article',
		},
		{
			name: 'Anggota',
			link: '/anggota',
		},
		{
			name: 'Kontak',
			link: '/contact',
		},
	];

	return (
		<nav
			className={`mx-auto w-screen  px-20 py-4 flex items-center text-white fixed transition ease-in duration-150 ${
				route === '/'
					? isScrolled
						? 'bg-vega-blue'
						: 'bg-transparent'
					: ''
			}`}
		>
			<div className='navbar-brand z-20'>
				<Link
					href='/'
					className={`uppercase text-xl font-extrabold ${
						route === '/' ? (isScrolled ? '' : 'hidden') : ''
					}`}
				>
					Vega
				</Link>
			</div>
			<div className='nav-items ms-auto justify-evenly space-x-4 hidden md:block z-20'>
				{navLinks.map(function (navLink) {
					return (
						<Link
							key={navLink.link}
							href={navLink.link}
							className={`hover:text-blue-950 font-medium ${
								route == navLink.link ? 'active' : ''
							}`}
						>
							{navLink.name}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
