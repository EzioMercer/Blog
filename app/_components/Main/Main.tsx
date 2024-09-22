import styles from './Main.module.scss';
import Comments from '../Comments/Comments';
import { ReactNode } from 'react';
import Container from '../Container/Container';

const Main = ({
	children
}: {
	children: ReactNode
}) => {
	return (
		<main className={ styles.main }>
			<Container>
				<article>
					{ children }
				</article>
				<Comments />
			</Container>
		</main>
	)
}

export default Main;
