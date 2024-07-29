import { FC, ReactNode } from 'react'
import styles from './button.module.sass'

export const Button: FC<ButtonProps> = (props) => {
	const { children } = props

	return <button className={styles.main}>{children}</button>
}

type ButtonProps = {
	children: ReactNode
}
