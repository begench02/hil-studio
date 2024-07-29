import { FlipLink } from 'components/hover-animation-1/hover-animation-1'
import styles from './header.module.sass'

export const Header = () => {
	return (
		<header className={`${styles.main} full_width`}>
			<nav>
				<ul>
					<li>
						<FlipLink href='#'>Clients</FlipLink>
					</li>
					<li>
						<FlipLink href='#'>Projects</FlipLink>
					</li>
				</ul>
			</nav>
			<div className={styles.logo}>Begench</div>
			<nav className={styles.nav_end}>
				<ul>
					<li>
						<FlipLink href='#'>About</FlipLink>
					</li>
					<li>
						<FlipLink href='#'>Contacts</FlipLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
