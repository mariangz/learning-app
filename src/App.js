import Column from './Column';
import './index.css';
import Container from './Container';
import Task from './Task';
import { data } from './data';

export default function App() {
	const dataList = data.map((item) => (
		<Task title={item.title} description={item.description} />
	));

	return (
		<>
			<Container theme='dark'>
				<Column title='No Idea' dataList={dataList} />
				<Column title='Learning' />
				<Column title='Project' />
				<Column title='Ready' />
			</Container>
		</>
	);
}
