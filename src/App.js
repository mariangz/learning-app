import { useState } from 'react';
import './index.css';
import AppForm from './AppForm';
import AddButton from './AddColumn';
import Column from './Column';
import List from './List';
import Container from './Container';
import { useImmer } from 'use-immer';
import produce from 'immer';

export default function App() {
  const [tasks, setTasks] = useImmer({
    // 'no-idea': [],
    // learning: [],
    // ready: [],
  });

  const [entry, setEntry] = useState({});
  const [showButton, setShowButton] = useImmer({});
  const [showInput, setShowInput] = useImmer({});
  const [validation, setValidation] = useState({});
  const [validationColumn, setValidationColumn] = useState('');
  const [showButtonColumn, setShowButtonColumn] = useState(true);
  const [showInputColumn, setShowInputColumn] = useState(false);
  const [columnTitle, setColumnTitle] = useState('');

  function handleFormSubmit(event) {
    const e = event.target;
    event.preventDefault();
    if (!entry[e.id]) {
      setValidation(
        produce(validation, (draft) => {
          draft[e.id] = 'Enter a task';
        })
      );
      return;
    }
    setValidation(
      produce(validation, (draft) => {
        draft[e.id] = '';
      })
    );
    setTasks(
      produce(tasks, (draft) => {
        if (draft[e.id]) {
          draft[e.id].push(entry[e.id]);
        } else {
          draft[e.id] = [];
          draft[e.id].push(entry[e.id]);
        }
      })
    );
    setEntry({ ...entry, [e.id]: '' });
    setShowButton((draft) => {
      draft[e.id] = true;
    });
    setShowInput((draft) => {
      draft[e.id] = false;
    });
  }

  function handleShowInputClick(event) {
    const e = event.target;
    setShowButton(
      produce(showButton, (draft) => {
        draft[e.id] = false;
      })
    );
    setShowInput(
      produce(showInput, (draft) => {
        draft[e.id] = true;
      })
    );
  }

  function handleEntryChange(event) {
    const e = event.target;
    setEntry({ ...entry, [e.id]: e.value });
  }

  function handleCancelClick(event) {
    const e = event.target;
    setEntry('');
    setShowButton((draft) => {
      draft[e.id] = true;
    });
    setShowInput((draft) => {
      draft[e.id] = false;
    });
  }

  function handleCancelColumnClick() {
    setShowButtonColumn((prevState) => !prevState);
    setShowInputColumn((prevState) => !prevState);
  }

  function handleShowInputColumnClick() {
    setShowButtonColumn((ShowButtonColumn) => !ShowButtonColumn);
    setShowInputColumn((ShowInputColumn) => !ShowInputColumn);
  }

  function handleColumnChange(event) {
    setColumnTitle(event.target.value);
  }

  function handleColumnSubmit(event) {
    console.log(columnTitle);
    event.preventDefault();
    if (!columnTitle) {
      setValidationColumn('Enter a task');
      return;
    }
    setTasks((draft) => {
      draft[columnTitle] = [];
    });
    setShowButtonColumn((ShowButtonColumn) => !ShowButtonColumn);
    setShowInputColumn((ShowInputColumn) => !ShowInputColumn);
    setColumnTitle('');
  }

  const listColumns = Object.keys(tasks).map((keyOfTask, index, array) => (
    <Column
      title={keyOfTask}
      add={false}
      tasksList={tasks[keyOfTask].map((item) => (
        <List
          key={item}
          item={item}
          column={index}
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
    >
      <AppForm
        showInput={showInput}
        entry={entry[keyOfTask]}
        onFormSubmit={handleFormSubmit}
        onShowInputClick={handleShowInputClick}
        onEntryChange={handleEntryChange}
        onCancelClick={handleCancelClick}
        id={keyOfTask}
        validation={validation[keyOfTask]}
      />
    </Column>
  ));

  return (
    <Container>
      {listColumns}
      <AddButton
        showInputColumn={showInputColumn}
        onCancelColumnClick={handleCancelColumnClick}
        onColumnChange={handleColumnChange}
        onShowInputColumnClick={handleShowInputColumnClick}
        onColumnSubmit={handleColumnSubmit}
        value={columnTitle}
        validationColumn={validationColumn}
      />
    </Container>
  );
}
