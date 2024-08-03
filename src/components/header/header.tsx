import { FlipLink } from 'components/hover-animation-1/hover-animation-1'
import styles from './header.module.sass'
import { Link } from 'react-router-dom'
import Logo from 'assets/images/icons/logo4.react.svg'

export const Header = () => {
	return (
		<header className={`${styles.main} full_width`}>
			<nav>
				<ul>
					<li>
						<Link to='clients'>
							<FlipLink href='#'>Clients</FlipLink>
						</Link>
					</li>
					<li>
						<FlipLink href='#'>Projects</FlipLink>
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
						<FlipLink href='#'>About</FlipLink>
					</li>
					<li>
						<Link to='contact-us'>
							<FlipLink href='#'>Contacts</FlipLink>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
