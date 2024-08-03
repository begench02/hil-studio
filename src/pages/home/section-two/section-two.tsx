import { Button } from 'components/button/button'
import styles from './section-two.module.sass'
import team from 'assets/images/team.jpeg'
import team2 from 'assets/images/team2.jpg'
import { AnimatedText } from 'components/animated-text/animated-text'

export const SectionTwo = () => {
	return (
		<div className={styles.main}>
			<div className={styles.team}>
				Out team
				<img
					src={team}
					width={100}
					height={50}
					style={{ marginInline: '10px', borderRadius: '3rem', objectFit: 'cover' }}
				/>
				is the key to your company's
				<img
					src={team2}
					width={100}
					height={50}
					style={{ marginInline: '10px', borderRadius: '3rem', objectFit: 'cover' }}
				/>
				leap to success.
			</div>
			<div className={styles.team2}>
				<AnimatedText text="Together with the strongest team in Ashgabat, we have solved and helped companies in Ashgabat to fight their design and tech problems. you're happy we won" />

				<div className={styles.team2__button}>
					<Button>LET,S TALK</Button>
				</div>
			</div>
		</div>
	)
}
