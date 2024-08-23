import { AnimatedText } from 'components/animated-text/animated-text'
import { Layout } from 'components/layout/layout'
import { SectionTwo } from './section-two/section-two'
import { ProjectsSection } from './projects-section/projects-section'
import { ParallaxImages } from './parallax-images/parallax-images'
import { HorizontalScroll } from 'components/horizontal-scroll/horizontal-scroll'
import { WeDoSection } from './we-do-section/we-do-section'
import { WhyWeSection } from './why-we-section/why-we-section'
import { Footer } from 'components/footer/footer'
import clsx from 'clsx'
import styles from '../../app.module.sass'

export const Home = () => {
	return (
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
				<div className='full_width'>
					<Footer />
				</div>
			</div>
		</Layout>
	)
}
