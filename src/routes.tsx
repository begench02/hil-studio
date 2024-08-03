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

export const Routes: RouteObject[] = [
	{
		path: '',
		Component: Layout,
		children: [
			{
				path: '/',
				Component: () => (
					<div className='content_grid'>
						<Header />
						<div className={styles.hero}>hil studio</div>
						<div className='breakout'>
							<SectionTwo />
						</div>
						<ProjectsSection />
						<div className='full_width'>
							<HorizontalScroll />
						</div>
						<div className='breakout'>
							<WeDoSection />
						</div>
						<div className='breakout'>
							<WhyWeSection />
						</div>
						<div className='full_width'>
							<Footer />
						</div>
					</div>
				),
			},
			{
				path: 'contact-us',
				Component: ContactUs,
			},
		],
	},
]
