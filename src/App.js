import Column from './Column';
import './index.css';
import Container from './Container';

export default function App() {
	return (
		<>
			<Container theme='light'>
				<Column title='No Idea' />
				<Column title='Learning' />
				<Column title='Project' />
				<Column title='Ready' />
			</Container>
		</>
	);
}
