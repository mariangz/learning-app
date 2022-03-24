import clsx from 'clsx';
import GenericAddButton from './GenericAddButton';

export default function Column({
  title,
  tasksList,
  children,
  add,
  onFormSubmit,
  id,
  entry,
  validation,
  onRemoveColumnSubmit,
}) {
  const classes = clsx({ column: true, addColumn: add });
  function handleFormSubmit(event) {
    event.preventDefault();
    onRemoveColumnSubmit(title);
  }
  return (
    <div className={classes}>
      <h2 className='column__title'>{title}</h2>
      <form onSubmit={handleFormSubmit} title={title}>
        <button>Remove</button>
      </form>
      <div className='column__body'>
        <ul>{tasksList}</ul>
      </div>
      {children}
      <GenericAddButton
        {...{
          onFormSubmit,
          id,
          entry,
          validation,
          labelName: 'Task',
        }}
      />
    </div>
  );
}
