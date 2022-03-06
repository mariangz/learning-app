import Card from './Card';
import './index.css';
import Container from './Container';
import MainContainer from './MainContainer';
import Task from './Task';
import { data } from './data';

export default function App() {
	const dataList = data.map((item) => (
		<Task title={item.title} description={item.description} />
	));

	return (
		<>
			<MainContainer>
				<Container theme='dark'>
					<Card title='No Idea' dataList={dataList} />
					<Card title='Learning' />
					<Card title='Project' />
					<Card title='Ready' />
				</Container>
				<Container theme='light'>
					<label className='label' htmlFor='inputTask'>
						Task
					</label>
					<input id='inputTask' />
				</Container>
			</MainContainer>
		</>
	);
}
