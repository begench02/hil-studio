import { Button } from 'components/button/button'
import { TiltCard } from 'components/tilt-card/tilt-card'
import AdHaven from 'assets/images/AdHaven.png'
import clsx from 'clsx'
import styles from './projects-section.module.sass'
import HereketCheshmesi from 'assets/images/hereket-cheshmesi.png'
import { TextOpacity } from 'components/text-opacity/text-opacity'

export const ProjectsSection = () => {
	return (
		<>
			<div className={clsx(styles.header, 'breakout')}>
				{/* <TextOpacity className={styles.header__title} text='Study cases' /> */}
				<div className={styles.header__content}>
					<div>
						<TextOpacity
							text='With a touch out design power, we have created various design that are beyond the
							imagination of other designers on this earth.'
						/>
					</div>
					<div className={styles.buttons}>
						<Button>LET,S TALK</Button>
						<Button>SEE ALL PORTFOLIO</Button>
					</div>
				</div>
			</div>
			<div className={styles.cards}>
				<TiltCard>
					<div className={styles.card}>
						<img src={AdHaven} alt='AdHaven' width={100} height={100} />
						<p className={styles.card__title}>AdHaven</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, aliquid impedit sapiente
							nesciunt, quam molestias perferendis quos
						</p>
					</div>
				</TiltCard>
				<TiltCard>
					<div className={styles.card}>
						<img src={HereketCheshmesi} alt='AdHaven' width={100} height={100} />
						<p className={styles.card__title}>Hereket Cheshmesi</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, aliquid impedit sapiente
							nesciunt, quam molestias perferendis quos
						</p>
					</div>
				</TiltCard>
			</div>
		</>
	)
}
