import Title from './Title';

export default function Card({ title }) {
  return (
    <div className="card">
      <Title title={title} />
    </div>
  );
}
