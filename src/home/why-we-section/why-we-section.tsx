import { Link } from 'components/hover-animation-2/hover-animation-2'
import aboutUs from '../../images/about-us.png'
import clients from '../../images/clients.jpg'
import styles from './why-we-section.module.sass'

export const WhyWeSection = () => {
	return (
		<section>
			<h2 className={styles.heading}>Why Us ?</h2>
			<div>
				<Link heading='Fast Results' subheading='Learn what we do here' imgSrc={aboutUs} href='#' />
				<Link heading='Dedicated team' subheading='We work with great people' imgSrc={clients} href='#' />
				<Link heading='Unlimited Revision' subheading='Our work speaks for itself' href='#' imgSrc={aboutUs} />
				<Link heading='Free Consulting' subheading='We want cool people' href='#' imgSrc={clients} />
			</div>
		</section>
	)
}
