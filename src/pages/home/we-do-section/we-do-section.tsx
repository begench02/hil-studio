import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useState } from 'react'
import clsx from 'clsx'
import styles from './we-do-section.module.sass'
import uiUx from 'assets/images/ui-ux.jpg'
import webDevelopment from 'assets/images/web-development.jpg'
import branding from 'assets/images/branding.png'
import mobileDevelopment from 'assets/images/mobile-development.png'
import { AnimatedText } from 'components/animated-text/animated-text'

const skills = [
	{
		image: uiUx,
		title: 'UI/UX Design',
	},
	{
		image: webDevelopment,
		title: 'Web Development',
	},
	{
		image: branding,
		title: 'Branding',
	},
	{
		image: mobileDevelopment,
		title: 'Mobile Development',
	},
	{
		image: uiUx,
		title: 'UI/UX Design',
	},
]

export const WeDoSection = () => {
	const [shift, setShift] = useState(0)

	return (
		<div>
			<div className={styles.header}>
				<AnimatedText text='Some of our main unbeatable forces to change the world.' className={styles.title} />
				<div className={styles.arrows}>
					<button
						className={styles.arrows__button}
						onClick={() => setShift((prev) => prev - 1)}
						disabled={shift === 0}
					>
						<FiArrowLeft />
					</button>
					<button
						className={styles.arrows__button}
						onClick={() => setShift((prev) => prev + 1)}
						disabled={shift + 3 === skills.length}
					>
						<FiArrowRight />
					</button>
				</div>
			</div>
			<div className={styles.content}>
				<motion.div
					animate={{ translateX: `calc(-${shift * 33}% - ${shift * 1}rem)` }}
					className={styles.carousel}
				>
					{skills.map(({ title, image }) => (
						<div className={styles.card} key={title + image}>
							<img src={image} className={styles.card__image} />
							<p className={styles.card__text}>{title}</p>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	)
}
