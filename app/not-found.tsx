import Link from 'next/link';
import properties from "@/data/properties.json";

export default function NotFound() {
	const bg = properties["media.homepage.photo.1"].media[0];
	return (
		<div className='w-full text-center py-32 relative bg-blend-lighten relative'
			style={{ backgroundImage: `url(${bg})`, backgroundSize: 'contain', backgroundPosition: 'center' }}
		>
			<div className="absolute inset-0 bg-white/90" />
			<h2 className='text-xl md:text-[30px] font-bold tracking-tight relative'>Something's Wrong Here</h2>
			<p className='text-muted-foreground pb-6 relative'>We can't find the page you are looking for.</p>
			<Link href="/" className='underline text-primary relative font-bold'>Return Home</Link>
		</div>
	)
}