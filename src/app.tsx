import './global.sass'
import { Footer } from 'components/footer/footer'
import { Header } from 'components/header/header'
import { HorizontalScroll } from 'components/horizontal-scroll/horizontal-scroll'
import { ProjectsSection } from './pages/home/projects-section/projects-section'
import { SectionTwo } from './pages/home/section-two/section-two'
import { TiltCard } from 'components/tilt-card/tilt-card'
import { WeDoSection } from './pages/home/we-do-section/we-do-section'
import { WhyWeSection } from './pages/home/why-we-section/why-we-section'
import Logo from 'assets/images/22.svg'
import styles from './app.module.sass'
import { Routes } from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const App = () => {
	const router = createBrowserRouter(Routes)

	return (
		<main className={styles.main}>
			<RouterProvider router={router} />
		</main>
	)
}
