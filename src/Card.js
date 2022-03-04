import Task from './Task';
import { data } from './data';

export default function Card({ title }) {
  const dataList = data.map((item) => (
    <Task title={item.title} description={item.description} />
  ));
  return (
    <div className="card">
      <h1>{title}</h1>
      {dataList}
    </div>
  );
}
