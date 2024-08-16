import { motion } from 'framer-motion'
import styles from './text-mask.module.sass'
import { useRef, useState } from 'react'
import { useMousePosition } from 'hooks/useMousePosition.hook'

export const TextMask = () => {
	const [isHovered, setHovered] = useState(false)
	const ref = useRef()
	const { x, y } = useMousePosition(ref)
	const size = isHovered ? 400 : 40

	return (
		<div className={styles.main}>
			<motion.div
				ref={ref}
				className={styles.mask}
				animate={{
					WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
					WebkitMaskSize: `${size}px`,
				}}
				transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
			>
				<p
					onMouseEnter={() => {
						setHovered(true)
					}}
					onMouseLeave={() => {
						setHovered(false)
					}}
				>
					Together with the strongest team in Ashgabat, we have solved and helped companies in Ashgabat to
					fight their design and tech problems. you're happy we won
				</p>
			</motion.div>
			<div className={styles.body}>
				<p>
					Together with the <span>strongest team in Ashgabat</span>, we have solved and helped companies in
					Ashgabat to fight their design and tech problems. you're happy we won
				</p>
			</div>
		</div>
	)
}
