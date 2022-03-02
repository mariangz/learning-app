import List from './List';

export default function App({ name, technology }) {
  return (
    <>
      <h1>
        I'm {name} and I'm learning {technology}
      </h1>
      <List />
    </>
  );
}
