import Task from './Task';

export default function Card({ title }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <Task />
      <Task />
    </div>
  );
}
