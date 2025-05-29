import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='w-full text-center py-32'>
			<h2 className='text-[36px] font-bold tracking-tight'>Something's Wrong Here</h2>
			<p className='text-muted-foreground pb-6'>We can't find the page you are looking for.</p>
			<Link href="/" className='underline text-primary font-bold'>Return Home</Link>
		</div>
	)
}