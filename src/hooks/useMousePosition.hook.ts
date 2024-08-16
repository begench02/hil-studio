import { useEffect, useState } from 'react'

export const useMousePosition = (ref: any) => {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null })

	const updateMousePosition = (e) => {
		const { width, height, left, top } = ref.current.getBoundingClientRect()
		const mouseX = e.clientX - left
		const mouseY = e.clientY - top

		// const xPercent = mouseX / width
		// const yPercent = mouseY / height

		setMousePosition({ x: mouseX, y: mouseY })
	}

	useEffect(() => {
		ref.current.addEventListener('mousemove', updateMousePosition)

		return () => ref.current.removeEventListener('mousemove', updateMousePosition)
	}, [])

	return mousePosition
}
