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

  function handleRemoveTask(indexCol, index) {
    setColumns(() =>
      produce(columns, (draft) => {
        draft[indexCol].tasks.splice(index, 1);
      })
    );
  }

  function handleRemoveColumn(index) {
    setColumns(() =>
      produce(columns, (draft) => {
        draft.splice(index, 1);
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
  function handleUpdateTask(column, index, newTitle) {
    setColumns(() =>
      produce(columns, (draft) => {
        draft[column].tasks[index] = newTitle;
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

  const listColumns = columns.map((column, indexCol, arrayCol) => (
    <Column
      key={column.title}
      title={column.title}
      add={false}
      index={indexCol}
      column={indexCol}
      onFormSubmit={(value) => handleFormSubmit(value, indexCol)}
      validation={validation[column]}
      onRemoveColumn={() => handleRemoveColumn(indexCol)}
      onUpdateColumn={handleUpdateColumn}
      tasksList={column.tasks.map((item, index) => (
        <List
          key={item}
          item={item}
          column={indexCol}
          indexCol={indexCol}
          index={index}
          id={indexCol}
          onRemoveTask={() => handleRemoveTask(indexCol, index)}
          onUpdateTask={handleUpdateTask}
          last={indexCol === arrayCol.length - 1}
          onNextClick={() =>
            setColumns(
              produce(columns, (draft) => {
                draft[indexCol + 1].tasks.push(item);
                draft[indexCol].tasks = draft[indexCol].tasks.filter(
                  (i) => i !== item
                );
              })
            )
          }
          onPrevClick={() =>
            setColumns(
              produce(columns, (draft) => {
                draft[indexCol - 1].tasks.push(item);
                draft[indexCol].tasks = draft[indexCol].tasks.filter(
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
        entry={undefined}
        validation={validationColumn}
        labelName='Column'
      />
    </Container>
  );
}
