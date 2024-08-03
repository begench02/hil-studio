import { Header } from 'components/header/header'
import { Outlet } from 'react-router-dom'
import { easeIn, motion } from 'framer-motion'
import { ReactNode } from 'react'
import styles from './layout.module.sass'

export const Layout = (props: { children: ReactNode }) => {
	const animate = (variants) => {
		return {
			initial: 'initial',
			animate: 'enter',
			exit: 'exit',
			variants,
		}
	}

	const opacity = {
		initial: {
			opacity: 0,
		},
		enter: {
			opacity: 1,
			transition: {
				duration: 2,
			},
		},
		exit: {
			opacity: 1,
		},
	}

	const slide = {
		initial: {
			top: '100vh',
		},
		enter: {
			top: '100vh',
		},
		exit: {
			top: '0',
			transition: {
				duration: 1,
				ease: [0.76, 0, 0.24, 1],
			},
		},
	}

	const perspective = {
		initial: {
			y: 0,
			scale: 1,
			opacity: 1,
		},
		enter: {
			y: 0,
			scale: 1,
			opacity: 1,
		},
		exit: {
			y: -100,
			scale: 0.9,
			opacity: 0.5,
			transition: {
				duration: 1.2,
				ease: [0.76, 0, 0.24, 1],
			},
		},
	}

	return (
		<div>
			<motion.div {...animate(slide)} className={styles.slide} />
			<motion.div {...animate(perspective)}>
				<motion.div {...animate(opacity)}>
					<Header />
					{props.children}
				</motion.div>
			</motion.div>
		</div>
	)
}
