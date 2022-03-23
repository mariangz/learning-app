import clsx from 'clsx';
import GenericAddButton from './GenericAddButton';

export default function Column({ title, tasksList, children, add, onFormSubmit, id, entry, validation }) {
  const classes = clsx({ column: true, addColumn: add });
  return (
    <div className={classes}>
      <h2 className='column__title'>{title}</h2>
      <div className='column__body'>
        <ul>{tasksList}</ul>
      </div>
      {children}
      <GenericAddButton {...{onFormSubmit, id, entry, validation, labelName: 'Task'}} />
    </div>
  );
}
