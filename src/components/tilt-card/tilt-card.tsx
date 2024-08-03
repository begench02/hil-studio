import styles from './tilt-card.module.sass'
import { FC, ReactNode, useRef } from 'react'
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'

export const TiltCard: FC<TiltCardProps> = (props) => {
	const { children } = props

	const x = useMotionValue(0)
	const y = useMotionValue(0)

	const xSpring = useSpring(x)
	const ySpring = useSpring(y)

	const rotateX = useTransform(ySpring, [-0.5, 0.5], ['10deg', '-10deg'])
	const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-10deg', '10deg'])

	const ref = useRef()

	const handleMouseMove = (e) => {
		const rect = e.target.getBoundingClientRect()

		const width = rect.width
		const height = rect.height

		const mouseX = e.clientX - rect.left
		const mouseY = e.clientY - rect.top

		const xPercent = mouseX / width - 0.5
		const yPercent = mouseY / height - 0.5

		x.set(xPercent)
		y.set(yPercent)
	}

	const handleMouseLeave = (e) => {
		x.set(0)
		y.set(0)
	}

	return (
		<motion.div
			style={{ rotateX, rotateY }}
			className={styles.main}
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</motion.div>
	)
}

type TiltCardProps = {
	children: ReactNode
}
