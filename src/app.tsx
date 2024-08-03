import './global.sass'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import { Routes } from './routes'
import { AnimatePresence } from 'framer-motion'
import styles from './app.module.sass'
import { AnimatedOutlet } from 'components/animated-outlet'

export const App = () => {
	const router = createBrowserRouter(Routes)

	return (
		<main className={styles.main}>
			<RouterProvider router={router} />
		</main>
	)
}
