import { useState } from 'react';
import './index.css';
import Column from './Column';
import List from './List';
import Container from './Container';
import { useImmer } from 'use-immer';
import produce from 'immer';
import GenericAddButton from './GenericAddButton';

export default function App() {
  const [tasks, setTasks] = useImmer({});
  const [entry, setEntry] = useState({});
  const [validation, setValidation] = useState({});
  const [validationColumn, setValidationColumn] = useState('');
  console.log(tasks);
  function handleFormSubmit(value, id) {
    if (!value) {
      setValidation(
        produce(validation, (draft) => {
          draft[id] = 'Enter a task';
        })
      );
      return;
    }
    setValidation(
      produce(validation, (draft) => {
        draft[id] = '';
      })
    );
    setTasks(
      produce(tasks, (draft) => {
        if (draft[id]) {
          draft[id].push(value);
        } else {
          draft[id] = [];
          draft[id].push(value);
        }
      })
    );
    setEntry({ ...entry, [id]: '' });
  }

  function handleRemoveTaskSubmit(item, id) {
    setTasks(() =>
      produce(tasks, (draft) => {
        draft[id] = draft[id].filter((i) => i !== item);
      })
    );
  }

  function handleRemoveColumn(title) {
    setTasks(() =>
      produce(tasks, (draft) => {
        delete draft[title];
      })
    );
  }
  function handleUpdateColumn(newTitle, title) {
    setTasks(() =>
      produce(tasks, (draft) => {
        draft[newTitle] = draft[title];
        delete draft[title];
      })
    );
  }

  function handleColumnSubmit(value) {
    if (!value) {
      setValidationColumn('Enter a column');
      return;
    }
    setValidationColumn('');
    setTasks((draft) => {
      draft[value] = [];
    });
  }

  const listColumns = Object.keys(tasks).map((keyOfTask, index, array) => (
    <Column
      key={keyOfTask}
      title={keyOfTask}
      add={false}
      entry={entry[keyOfTask]}
      onFormSubmit={handleFormSubmit}
      id={keyOfTask}
      validation={validation[keyOfTask]}
      onRemoveColumn={handleRemoveColumn}
      onUpdateColumn={handleUpdateColumn}
      tasksList={tasks[keyOfTask].map((item) => (
        <List
          key={item}
          item={item}
          column={index}
          id={keyOfTask}
          onRemoveSubmit={handleRemoveTaskSubmit}
          last={index === array.length - 1}
          onNextClick={() =>
            setTasks(
              produce(tasks, (draft) => {
                draft[array[index + 1]].push(item);
                draft[keyOfTask] = draft[keyOfTask].filter((i) => i !== item);
              })
            )
          }
          onPrevClick={() =>
            setTasks(
              produce(tasks, (draft) => {
                draft[array[index - 1]].push(item);
                draft[keyOfTask] = draft[keyOfTask].filter((i) => i !== item);
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
