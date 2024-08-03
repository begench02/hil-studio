import { Footer } from 'components/footer/footer'
import { Header } from 'components/header/header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<main>
			<Header />
			<Outlet />
			{/* <Footer /> */}
		</main>
	)
}
