import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './hover-animation-1.module.sass'
import { Link } from 'react-router-dom'

// export const App = () => {
// 	return (
// 		<div className={styles.main}>
// 			<FlipLink href='#'>Twitter</FlipLink>
// 			<FlipLink href='#'>LinkedIn</FlipLink>
// 			<FlipLink href='#'>Facebook</FlipLink>
// 			<FlipLink href='#'>Instagram</FlipLink>
// 		</div>
// 	)
// }

const DURATION = 0.25
const STAGGER = 0.025
export const FlipLink: FC<FlipLinkProps> = (props) => {
	const { children, to } = props

	return (
		<Link to={to}>
			<motion.div initial='initial' whileHover='hovered' className={styles.flip_link}>
				<div>
					{children.split('').map((letter, index) => (
						<motion.span
							variants={{
								initial: { y: 0 },
								hovered: { y: '-100%' },
							}}
							key={letter + index}
							style={{ display: 'inline-block' }}
							transition={{
								duration: DURATION,
								ease: 'easeInOut',
								delay: STAGGER * index,
							}}
						>
							{letter}
						</motion.span>
					))}
				</div>
				<div className={styles.slide_in}>
					{children.split('').map((letter, index) => (
						<motion.span
							key={letter + index}
							variants={{
								initial: {
									y: '100%',
								},
								hovered: { y: 0 },
							}}
							transition={{
								duration: DURATION,
								ease: 'easeInOut',
								delay: STAGGER * index,
							}}
							style={{ display: 'inline-block' }}
						>
							{letter}
						</motion.span>
					))}
				</div>
			</motion.div>
		</Link>
	)
}

type FlipLinkProps = {
	children: string
	to: string
}
