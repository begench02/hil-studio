import './global.sass'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Routes } from './routes'
import styles from './app.module.sass'

export const App = () => {
	const router = createBrowserRouter(Routes)

	return (
		<main className={styles.main}>
			<RouterProvider router={router} />
		</main>
	)
}
