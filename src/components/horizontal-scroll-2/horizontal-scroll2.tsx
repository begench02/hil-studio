import { useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './horizontal-scroll2.module.sass'

export const HorizontalScroll2 = () => {
	const [animationDirection, setAnimationDirection] = useState<'forward' | 'backward'>('forward')

	return (
		<div className={styles.scroller} data-animated='true' data-direction={animationDirection}>
			<ul className={clsx(styles.tag_list, styles.scroller__inner)}>
				<li>HIL STUDIO</li>
				<li>&ndash;&ndash;</li>
				<li>HIL STUDIO</li>
				<li>&ndash;&ndash;</li>
				<li>HIL STUDIO</li>
				<li>&ndash;&ndash;</li>
				<li>HIL STUDIO</li>
				<li>&ndash;&ndash;</li>
				<li>HIL STUDIO</li>
				<li>&ndash;&ndash;</li>
				<li>HIL STUDIO</li>
				<li>&ndash;&ndash;</li>
				<li>HIL STUDIO</li>
				<li>&ndash;&ndash;</li>
				<li>HIL STUDIO</li>
				<li>&ndash;&ndash;</li>
			</ul>
		</div>
	)
}
