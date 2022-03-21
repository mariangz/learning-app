export default function List({ item }) {
  return (
    <li key={item}>
      <span className='line'></span>
      {item}
    </li>
  );
}
