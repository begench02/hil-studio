import './global.sass'
import { Header } from 'components/header/header'
import { TiltCard } from 'components/tilt-card/tilt-card'
import styles from './app.module.sass'
import { ProjectsSection } from './home/projects-section/projects-section'
import { HorizontalScroll } from 'components/horizontal-scroll/horizontal-scroll'
import { WhyWeSection } from './home/why-we-section/why-we-section'
import Logo from 'assets/images/22.svg'
import { SectionTwo } from './home/section-two/section-two'

export const App = () => {
	return (
		<section className={styles.main}>
			<div className='content_grid'>
				<Header />
				<div className={styles.hero}>
					<Logo className={styles.logo} />
				</div>
				<div className='breakout'>
					<SectionTwo />
				</div>
				<ProjectsSection />
				<div className='full_width'>
					<HorizontalScroll />
				</div>
				<div className='breakout'>
					<WhyWeSection />
				</div>
			</div>
		</section>
	)
}
