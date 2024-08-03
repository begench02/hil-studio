import { HorizontalScroll2 } from 'components/horizontal-scroll-2/horizontal-scroll2'
import styles from './footer.module.sass'
import three from 'assets/images/5.jpg'

export const Footer = () => {
	return (
		<footer className={styles.main}>
			{/* <img src={three} className={styles.image} /> */}
			<div className={styles.horizontal_scroll}>
				<HorizontalScroll2 />
			</div>
		</footer>
	)
}
