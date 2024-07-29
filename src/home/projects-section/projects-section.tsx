import { TiltCard } from 'components/tilt-card/tilt-card'
import styles from './projects-section.module.sass'
import { Button } from 'components/button/button'
import clsx from 'clsx'


export const ProjectsSection = () => {
	return (
		<>
			<div className={clsx(styles.header, 'breakout')}>
				<h1 className={styles.header__title}>Study cases</h1>
				<div className={styles.header__content}>
					<div>
						<p>
							With a touch out design power, we have created various design that are beyond the
							imagination of other designers on this earth.
						</p>
					</div>
					<div className={styles.buttons}>
						<Button>LET,S TALK</Button>
						<Button>SEE ALL PORTFOLIO</Button>
					</div>
				</div>
			</div>
			<TiltCard />
		</>
	)
}
