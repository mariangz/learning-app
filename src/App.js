import Card from './Card';
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
				<Card title='No Idea' dataList={dataList} />
				<Card title='Learning' />
				<Card title='Project' />
				<Card title='Ready' />
			</Container>
		</>
	);
}
