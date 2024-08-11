import { Footer } from 'components/footer/footer'
import { Header } from 'components/header/header'
import { HorizontalScroll } from 'components/horizontal-scroll/horizontal-scroll'
import { ProjectsSection } from 'pages/home/projects-section/projects-section'
import { SectionTwo } from 'pages/home/section-two/section-two'
import { WeDoSection } from 'pages/home/we-do-section/we-do-section'
import { WhyWeSection } from 'pages/home/why-we-section/why-we-section'
import styles from './app.module.sass'
import type { RouteObject } from 'react-router-dom'
import { ContactUs } from 'pages/contact-us/contact-us'
import { Layout } from 'components/layout/layout'
import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import { AnimatedOutlet } from 'components/animated-outlet'
import { AnimatedText } from 'components/animated-text/animated-text'
import { ParallaxImages } from 'pages/home/parallax-images/parallax-images'

export const Routes: RouteObject[] = [
	{
		path: '',
		Component: () => (
			<>
				<AnimatedOutlet />
			</>
		),
		children: [
			{
				path: '/',
				Component: () => (
					<Layout>
						<div className='content_grid'>
							<AnimatedText text='Hil studio' className={clsx(styles.hero, 'full_width')} />
							<section className='breakout'>
								<SectionTwo />
							</section>
							<ProjectsSection />

							<section className='full_width'>
								<ParallaxImages />
							</section>

							<div className='full_width'>
								<HorizontalScroll />
							</div>
							<div className='breakout'>
								<WeDoSection />
							</div>
							<div className='breakout'>
								<WhyWeSection />
							</div>
							{/* <div className='full_width'>
								<Footer />
							</div> */}
						</div>
					</Layout>
				),
			},
			{
				path: 'contact-us',
				Component: () => (
					<Layout>
						<ContactUs />
					</Layout>
				),
			},
		],
	},
	{
		path: 'test',
		element: <ParallaxImages />,
	},
]
