import { useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './horizontal-scroll.module.sass'

export const HorizontalScroll = () => {
	const [animationDirection, setAnimationDirection] = useState<'forward' | 'backward'>('forward')

	return (
		<div className={styles.scroller} data-animated='true' data-direction={animationDirection}>
			<ul className={clsx(styles.tag_list, styles.scroller__inner)}>
				<li>.bubble</li>
				<li>Airtable</li>
				<li>dokey.</li>
				<li>Jotform</li>
				<li>Typeform</li>
				<li>.bubble</li>
				<li>Airtable</li>
				<li>dokey.</li>
				<li>Jotform</li>
				<li>Typeform</li>
				<li>.bubble</li>
				<li>Airtable</li>
				<li>dokey.</li>
				<li>Jotform</li>
				<li>Typeform</li>
				<li>.bubble</li>
				<li>Airtable</li>
				<li>dokey.</li>
				<li>Jotform</li>
				<li>Typeform</li>
				<li>.bubble</li>
				<li>Airtable</li>
				<li>dokey.</li>
				<li>Jotform</li>
				<li>Typeform</li>
			</ul>
		</div>
	)
}
