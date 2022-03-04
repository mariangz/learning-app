import Card from './Card';
import './index.css';
import Container from './Container';

export default function App() {
  return (
    <>
      <Container theme="dark">
        <Card title="No Idea" />
        <Card title="Learning" />
        <Card title="Project" />
        <Card title="Ready" />
      </Container>
      <Container theme="dark">
        <input />
        <button type="submit">Send</button>
      </Container>
    </>
  );
}
