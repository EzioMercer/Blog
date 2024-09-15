import styles from './Header.module.scss';
import Container from '../Container/Container';

const Header = () => {
	return (
		<header className={ styles.header }>
			<Container>
				Header
			</Container>
		</header>
	)
}

export default Header;
