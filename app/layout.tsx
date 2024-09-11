import { ReactNode } from 'react';
import './_reset.css';
import './_code-block.scss';

export default function RootLayout({
	children
}: {
	children: ReactNode
}) {
	return (
		<html lang="en">
			<body>{ children }</body>
		</html>
	)
}
