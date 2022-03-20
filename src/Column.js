export default function Column({ title, tasksList, children }) {
  return (
    <div className='column'>
      <h2 className='column__title'>{title}</h2>
      <div className='column__body'>
        <ul>{tasksList}</ul>
      </div>
      {children}
    </div>
  );
}
