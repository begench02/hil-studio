import { FC, useRef } from 'react'
import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import clsx from 'clsx'
import styles from './text-opacity.module.sass'

export const TextOpacity = ({ text, className }: { text: string; className?: string }) => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.25'] })

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		console.log(`Latest: ${latest}`)
	})

	const words = text.split(' ')
	return (
		<p ref={ref} className={clsx(styles.text, className)}>
			{words.map((word, index) => {
				const start = index / words.length
				const end = start + 1 / words.length
				return <Word key={index} range={[start, end]} progress={scrollYProgress} word={word} />
			})}
		</p>
	)
}

const Word: FC<WordType> = (props) => {
	const { word, range, progress } = props
	const characters = word.split('')
	const amount = range[1] - range[0]
	const step = amount / word.length

	return (
		<span className={styles.word}>
			{characters.map((char, index) => {
				const start = range[0] + step * index
				const end = range[0] + step * (index + 1)
				const opacity = useTransform(progress, [start, end], [0, 1])

				return (
					<span key={index}>
						<span className={styles.shadow}>{char}</span>
						<motion.span key={index} style={{ opacity }}>
							{char}
						</motion.span>
					</span>
				)
			})}
		</span>
	)
}

type WordType = {
	range: [number, number]
	progress: MotionValue<number>
	word: string
}
