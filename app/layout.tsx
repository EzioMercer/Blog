import { ReactNode } from 'react';
import './_reset.css';
import './_global.css'
import './_code-block.scss';

const RootLayout = ({
	children
}: {
	children: ReactNode
}) => {
	return (
		<html lang="en">
			<body>
				{ children }
			</body>
		</html>
	)
}

export default RootLayout;
