import { motion, MotionStyle, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import ParallaxImage2 from 'assets/images/parallax-image2.jpg'
import robot from 'assets/images/2.jpg'
import styles from './parallax-images.module.sass'
import { FC, useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/dist/lenis-react.mjs'
import ParallaxImage1 from 'assets/images/parallax-image1.jpg'
import ParallaxImage3 from 'assets/images/parallax-image3.jpg'
import ParallaxImage4 from 'assets/images/parallax-image4.png'
import ParallaxImage6 from 'assets/images/parallax-image6.jpg'
import ParallaxImage5 from 'assets/images/parallax-image5.png'

let SECTION_HEIGHT = 1500
let SECTION_START = 0
export const ParallaxImages = () => {
	return (
		<div>
			<ReactLenis root>
				<Hero />
				{/* <div className={styles.footer} /> */}
			</ReactLenis>
		</div>
	)
}

const Hero = () => {
	const ref = useRef()
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end end'] })
	const clip1 = useTransform(scrollYProgress, [0, 1], [25, 0])
	const clip2 = useTransform(scrollYProgress, [0, 1], [75, 100])
	const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
	const backgroundSize = useTransform(scrollYProgress, [0, 1], ['170%', '100%'])

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		console.log(`Latest value: ${latest}`)
	})
	return (
		<div className={styles.hero} style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} ref={ref}>
			{/* <CenterImage ref={ref} /> */}
			<motion.div
				style={{
					zIndex: '-1',
					// opacity,
					backgroundSize,
					clipPath,
					position: 'sticky',
					top: 0,
					height: '100vh',
					backgroundImage: `url(${robot})`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<Images />
			{/* <div className={styles.fadeout} /> */}
		</div>
	)
}

const CenterImage = (ref: any) => {
	// const ref = useRef(null)

	const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] })
	const clip1 = useTransform(scrollYProgress, [0, 1], [25, 0])
	const clip2 = useTransform(scrollYProgress, [0, 1], [75, 100])
	const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

	// const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
	const backgroundSize = useTransform(scrollYProgress, [0, 1], ['170%', '100%'])

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		console.log(`Latest value: ${latest}`)
	})

	return (
		<motion.div
			ref={ref}
			style={{
				zIndex: '-1',
				// opacity,
				// backgroundSize,
				clipPath,
				position: 'sticky',
				top: 0,
				height: '100vh',
				backgroundImage: `url(${robot})`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		/>
	)
}

const Images = () => {
	return (
		<div
			style={{
				marginInline: 'auto',
				paddingInline: '1rem',
				paddingTop: '200px',
				maxWidth: '80%',
				// backgroundColor: 'pink',
				display: 'grid',
			}}
		>
			<ParallaxImg
				src={ParallaxImage1}
				alt='And example of a space launch'
				start={-200}
				end={200}
				style={{ width: '33%' }}
			/>
			<ParallaxImg
				src={ParallaxImage5}
				alt='An example of a space launch'
				start={200}
				end={-250}
				style={{ width: '50%', marginInline: 'auto' }}
			/>
			<ParallaxImg
				src={ParallaxImage6}
				alt='Orbiting satellite'
				start={100}
				end={-200}
				style={{ width: '30%', justifySelf: 'start' }}
			/>
			<ParallaxImg
				src={ParallaxImage4}
				alt='Orbiting satellite'
				start={0}
				end={-500}
				style={{ width: '35%', marginLeft: 'auto' }}
			/>
		</div>
	)
}

const ParallaxImg: FC<ParallaxImgType> = (props) => {
	const { src, alt, start, end, className, style } = props

	const ref = useRef(null)
	const { scrollYProgress } = useScroll({ target: ref, offset: [`${start}px end`, `end ${end * -1}px`] })

	const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])
	const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85])
	const y = useTransform(scrollYProgress, [0, 1], [start, end])

	const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`

	return <motion.img ref={ref} src={src} alt={alt} className={className} style={{ ...style, opacity, transform }} />
}

type ParallaxImgType = {
	src: string
	alt: string
	start: number
	end: number
	className?: string
	style?: MotionStyle
}
