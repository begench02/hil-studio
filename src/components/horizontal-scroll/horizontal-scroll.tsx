import { useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './horizontal-scroll.module.sass'

export const HorizontalScroll = () => {
	const [animationDirection, setAnimationDirection] = useState<'forward' | 'backward'>('forward')

	return (
		<div className={styles.scroller} data-animated='true' data-direction={animationDirection}>
			<ul className={clsx(styles.tag_list, styles.scroller__inner)}>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
				<li>AdHaven</li>
				<li>Hereket Chesmesi</li>
			</ul>
		</div>
	)
}
