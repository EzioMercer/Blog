import { ReactNode } from 'react';
import './_reset.css';
import './_colors.css';
import './_global.css';
import './_code-block.scss';
import Footer from './_components/Footer/Footer';
import Header from './_components/Header/Header';
import Main from './_components/Main/Main';

const RootLayout = ({
	children
}: {
	children: ReactNode
}) => {
	return (
		<html lang="en">
			<body>
				<Header />
				<Main>
					{ children }
				</Main>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout;
