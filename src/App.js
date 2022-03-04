import Card from './Card';
import './index.css';
import Container from './Container';
import MainContainer from './MainContainer';

export default function App() {
  return (
    <>
      <MainContainer>
        <Container theme="dark">
          <Card title="No Idea" />
          <Card title="Learning" />
          <Card title="Project" />
          <Card title="Ready" />
        </Container>
        <Container theme="light">
          <label className="label" htmlFor="inputTask">
            Task
          </label>
          <input id="inputTask" />
        </Container>
      </MainContainer>
    </>
  );
}
