import { useState } from 'react';
import './index.css';
import Column from './Column';
import List from './List';
import Container from './Container';
import { useImmer } from 'use-immer';
import produce from 'immer';
import GenericAddButton from './GenericAddButton';

export default function App() {
  const [columns, setColumns] = useImmer([]);
  console.log(columns);
  const [entry, setEntry] = useState({});
  const [validation, setValidation] = useState({});
  const [validationColumn, setValidationColumn] = useState('');

  function handleFormSubmit(value, index) {
    if (!value) {
      setValidation(
        produce(validation, (draft) => {
          draft[index] = 'Enter a task';
        })
      );
      return;
    }
    // setValidation(
    //   produce(validation, (draft) => {
    //     draft[index] = '';
    //   })
    // );

    setColumns(
      produce(columns, (draft) => {
        draft[index].tasks.push(value);
      })
    );
    setEntry({ ...entry, [index]: '' });
  }

  function handleRemoveTaskSubmit(item, id) {
    setColumns(() =>
      produce(columns, (draft) => {
        draft[id] = draft[id].filter((i) => i !== item);
      })
    );
  }

  function handleRemoveColumn(column) {
    setColumns(() =>
      produce(columns, (draft) => {
        draft.splice(draft[column], 1);
      })
    );
  }

  function handleUpdateColumn(newTitle, index) {
    setColumns(() =>
      produce(columns, (draft) => {
        draft[index].title = newTitle;
      })
    );
  }

  function handleColumnSubmit(value) {
    if (!value) {
      setValidationColumn('Enter a column');
      return;
    }
    setValidationColumn('');
    setColumns((draft) => {
      draft.push({ title: value, tasks: [] });
    });
  }

  const listColumns = columns.map((column, index, array) => (
    <Column
      key={column.title}
      title={column.title}
      add={false}
      index={index}
      onFormSubmit={(value) => handleFormSubmit(value, index)}
      validation={validation[column]}
      onRemoveColumn={(column) => handleRemoveColumn(column)}
      onUpdateColumn={handleUpdateColumn}
      tasksList={column.tasks.map((item) => (
        <List
          key={item}
          item={item}
          column={index}
          id={column}
          onRemoveSubmit={handleRemoveTaskSubmit}
          last={index === array.length - 1}
          onNextClick={() =>
            setColumns(
              produce(columns, (draft) => {
                draft[index + 1].tasks.push(item);
                draft[index].tasks = draft[index].tasks.filter(
                  (i) => i !== item
                );
              })
            )
          }
          onPrevClick={() =>
            setColumns(
              produce(columns, (draft) => {
                draft[index - 1].tasks.push(item);
                draft[index].tasks = draft[index].tasks.filter(
                  (i) => i !== item
                );
              })
            )
          }
        />
      ))}
    ></Column>
  ));

  return (
    <Container>
      {listColumns}
      <GenericAddButton
        onFormSubmit={handleColumnSubmit}
        id={undefined}
        // onEntryChange={() => {}}
        entry={undefined}
        validation={validationColumn}
        labelName='Column'
      />
    </Container>
  );
}
