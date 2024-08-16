declare module '*.sass' {
	const content: Record<string, string>
	export default content
}

declare module '*.react.svg' {
	import React from 'react'
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
	export default SVG
}

declare module '*.png'
declare module '*.jpg'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.webp'
