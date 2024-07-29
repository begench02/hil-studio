import { FiMousePointer } from 'react-icons/fi'
import styles from './tilt-card.module.sass'
import { useRef } from 'react'
import AdHaven from '../../images/AdHaven.jpg'
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'

export const TiltCard = () => {
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
			<div className={styles.content}>
				<img src={AdHaven} alt='AdHaven' width={100} height={100} />
				<p className={styles.title}>AdHaven</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, aliquid impedit sapiente nesciunt,
					quam molestias perferendis quos, omnis minus accusantium cumque ex.
				</p>
			</div>
		</motion.div>
	)
}
