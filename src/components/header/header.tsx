import { FlipLink } from 'components/hover-animation-1/hover-animation-1'
import styles from './header.module.sass'
import { Link } from 'react-router-dom'
import Logo from 'assets/images/icons/logo6.react.svg'
import { motion } from 'framer-motion'

export const Header = () => {
	return (
		<motion.header
			className={`${styles.main} full_width`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2, delay: 0.4 }}
		>
			<nav>
				<ul>
					<li>
						<FlipLink to='clients'>Clients</FlipLink>
					</li>
					<li>
						<FlipLink to='#'>Projects</FlipLink>
					</li>
				</ul>
			</nav>
			<div className={styles.logo}>
				<Link to='/'>
					<Logo width={300} height={200} />
				</Link>
			</div>
			<nav className={styles.nav_end}>
				<ul>
					<li>
						<FlipLink to=''>About</FlipLink>
					</li>
					<li>
						<FlipLink to='contact-us'>Contacts</FlipLink>
					</li>
				</ul>
			</nav>
		</motion.header>
	)
}
