import { motion } from 'framer-motion'
import { FC } from 'react'

const textAnimations = {
	hidden: {
		opacity: 0,
		y: -20,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
}

export const AnimatedText: FC<AnimatedTextProps> = (props) => {
	const { className, text } = props

	return (
		<div className={className}>
			<motion.span initial='hidden' animate='visible' transition={{ staggerChildren: 0.1 }}>
				{text.split('').map((char, index) => {
					if (char === ' ') char = '\xa0'

					return (
						<motion.span key={index} style={{ display: 'inline-block' }} variants={textAnimations}>
							{char}
						</motion.span>
					)
				})}
			</motion.span>
		</div>
	)
}

type AnimatedTextProps = {
	className?: string
	text: string
}
