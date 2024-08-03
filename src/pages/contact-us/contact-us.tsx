import { FiArrowRight, FiArrowRightCircle } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './contact-us.module.sass'
import { FiMail, FiMessageSquare } from 'react-icons/fi'

export const ContactUs = () => {
	return (
		<section className={styles.main}>
			<div className={styles.text}>Contact Us</div>
			<form className={styles.form}>
				<div className={styles.input}>
					<input placeholder='name@email.com' />
					<FiMail className={styles.input__icon} />
				</div>
				<div className={styles.input}>
					<input placeholder='your message to us' />
					<FiMessageSquare className={styles.input__icon} />
				</div>
				<motion.button
					className={styles.form__button}
					initial={{ rotate: 0 }}
					whileHover={{
						rotate: [4, -50, 20, 0],
					}}
					// transition={{ ease: 'easeInOut', duration: 1 }}
				>
					<FiArrowRight />
				</motion.button>
			</form>
		</section>
	)
}
