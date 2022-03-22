import clsx from 'clsx';
export default function Column({ title, tasksList, children, add }) {
  const classes = clsx({ column: true, addColumn: add });
  return (
    <div className={classes}>
      <h2 className='column__title'>{title}</h2>
      <div className='column__body'>
        <ul>{tasksList}</ul>
      </div>
      {children}
    </div>
  );
}
