import { Link } from 'components/hover-animation-2/hover-animation-2'
import aboutUs from 'assets/images/about-us.png'
import clients from 'assets/images/clients.jpg'
import styles from './why-we-section.module.sass'
import Why from 'assets/images/why.jpg'

export const WhyWeSection = () => {
	return (
		<section>
			<div className={styles.a}>
				<h1 className={styles.heading}>
					Why <span style={{ color: '#FF9882' }}>Hil</span> Studio <span className={styles.question_mark}>?</span>
				</h1>
				<h1 className={styles.background_heading}>Why Hil Studio ?</h1>
				<img src={Why} alt='why' width={400} className={styles.image} />
			</div>
			<div>
				<Link heading='Fast Results' subheading='Learn what we do here' imgSrc={aboutUs} href='#' />
				<Link heading='Dedicated team' subheading='We work with great people' imgSrc={clients} href='#' />
				<Link heading='Unlimited Revision' subheading='Our work speaks for itself' href='#' imgSrc={aboutUs} />
				<Link heading='Free Consulting' subheading='We want cool people' href='#' imgSrc={clients} />
			</div>
		</section>
	)
}
