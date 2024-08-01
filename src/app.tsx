import './global.sass'
import { Header } from 'components/header/header'
import { HorizontalScroll } from 'components/horizontal-scroll/horizontal-scroll'
import { ProjectsSection } from './home/projects-section/projects-section'
import { SectionTwo } from './home/section-two/section-two'
import { TiltCard } from 'components/tilt-card/tilt-card'
import { WhyWeSection } from './home/why-we-section/why-we-section'
import Logo from 'assets/images/22.svg'
import styles from './app.module.sass'
import { Footer } from 'components/footer/footer'
import { WeDoSection } from './home/we-do-section/we-do-section'

export const App = () => {
	return (
		<section className={styles.main}>
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
		</section>
	)
}
