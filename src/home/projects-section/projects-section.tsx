import { TiltCard } from 'components/tilt-card/tilt-card'
import styles from './projects-section.module.sass'

export const ProjectsSection = () => {
	return (
		<div>
			<h1 className={styles.projects__title}>Study cases</h1>
			<TiltCard />
		</div>
	)
}
