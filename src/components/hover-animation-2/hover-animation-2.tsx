import { FC, useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import aboutUs from 'assets/images/about-us.png'
import clients from 'assets/images/clients.jpg'
import freeConsulting from 'assets/images/free-consulting.jpg'
import styles from './hover-animation-2.module.sass'

export const App = () => {
	return (
		<section>
			<div>
				<Link heading='About' subheading='Learn what we do here' imgSrc={aboutUs} href='#' />
				<Link heading='Clients' subheading='We work with great people' imgSrc={clients} href='#' />
				<Link heading='Portfolio' subheading='Our work speaks for itself' href='#' imgSrc={aboutUs} />
				<Link heading='Careers' subheading='We want cool people' href='#' imgSrc={clients} />
			</div>
		</section>
	)
}

export const Link: FC<LinkProps> = (props) => {
	const { heading, subheading, imgSrc, href } = props

	const ref = useRef(null)

	const x = useMotionValue(0)
	const y = useMotionValue(0)

	const xSpring = useSpring(x)
	const ySpring = useSpring(y)

	const top = useTransform(ySpring, [0.5, -0.5], ['20%', '40%'])
	const left = useTransform(xSpring, [0.5, -0.5], ['60%', '70%'])

	const handleMouseMove = (event) => {
		const { width, height, left, top } = ref.current.getBoundingClientRect()
		const mouseX = event.clientX - left
		const mouseY = event.clientY - top

		const xPercent = mouseX / width - 0.5
		const yPercent = mouseY / height - 0.5

		x.set(xPercent)
		y.set(yPercent)
	}

	return (
		<motion.a
			ref={ref}
			href={href}
			onMouseMove={handleMouseMove}
			className={styles.link}
			initial='initial'
			whileHover='whileHover'
		>
			<motion.img
				variants={{
					initial: {
						scale: 0,
						rotate: '-12.5deg',
					},
					whileHover: {
						scale: 1,
						rotate: '12.5deg',
					},
				}}
				src={imgSrc}
				transition={{
					type: 'spring',
				}}
				className={styles.image}
				style={{ top, left }}
			/>
			<div>
				<motion.span
					variants={{
						initial: {
							x: 0,
						},
						whileHover: {
							x: -16,
						},
					}}
					transition={{
						type: 'spring',
						delayChildren: 0.25,
						staggerChildren: 0.075,
					}}
					className={styles.heading}
				>
					{heading.split('').map((letter, index) => (
						<motion.pre
							key={index}
							style={{ display: 'inline-block' }}
							variants={{
								initial: {
									x: 0,
								},
								whileHover: {
									x: 16,
								},
							}}
							transition={{
								type: 'spring',
							}}
						>
							{letter}
						</motion.pre>
					))}
				</motion.span>
				<motion.span
					variants={{
						initial: {
							x: '25%',
							opacity: 0,
						},
						whileHover: {
							x: '0%',
							opacity: 1,
						},
					}}
					className={styles.subheading}
				>
					{subheading}
				</motion.span>
			</div>

			<motion.div
				variants={{
					initial: {
						x: '25%',
						opacity: 0,
					},
					whileHover: {
						x: '0%',
						opacity: 1,
					},
				}}
				transition={{
					type: 'spring',
				}}
				className={styles.arrow}
			>
				<FiArrowRight className={styles.arrow__icon} />
			</motion.div>
		</motion.a>
	)
}

type LinkProps = {
	heading: string
	subheading: string
	imgSrc: string
	href: string
}
