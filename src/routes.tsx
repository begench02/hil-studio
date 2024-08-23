import { AnimatedOutlet } from 'components/animated-outlet'
import { AnimatedText } from 'components/animated-text/animated-text'
import { AnimatePresence } from 'framer-motion'
import { ContactUs } from 'pages/contact-us/contact-us'
import { Footer } from 'components/footer/footer'
import { Header } from 'components/header/header'
import { HorizontalScroll } from 'components/horizontal-scroll/horizontal-scroll'
import { Layout } from 'components/layout/layout'
import { ParallaxImages } from 'pages/home/parallax-images/parallax-images'
import { ProjectsSection } from 'pages/home/projects-section/projects-section'
import { SectionTwo } from 'pages/home/section-two/section-two'
import { TextMask } from 'components/text-mask/text-mask'
import { WeDoSection } from 'pages/home/we-do-section/we-do-section'
import { WhyWeSection } from 'pages/home/why-we-section/why-we-section'
import clsx from 'clsx'
import styles from './app.module.sass'
import type { RouteObject } from 'react-router-dom'
import { Home } from 'pages/home/home'

export const Routes: RouteObject[] = [
	{
		path: '/',
		element: <AnimatedOutlet />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'test',
				element: <TextMask />,
			},
			{
				path: 'contact-us',
				Component: () => (
					<Layout>
						<ContactUs />
					</Layout>
				),
			},
		],
	},
	{
		path: 'test',
		element: <ParallaxImages />,
	},
]

type Properties = 'propA' | 'propB'
type MyMappedType<T extends Record<string, any>> = {
	[K in keyof T]: T[K]
}

type NewType = MyMappedType<{ a: 'a'; b: 'b' }>
// 		^?

type Pick1<T extends Record<string, any>, P extends string> = {
	[K in P]: T[K]
}

type Person = {
	name: string
	age: number
}
type test = Pick<Person, 'name'>
