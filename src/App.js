import { useState } from 'react';
import './index.css';
import AppForm from './AppForm';
import Column from './Column';
import List from './List';
import Container from './Container';
import { useImmer } from 'use-immer';
import produce from 'immer';

export default function App() {
  const [tasks, setTasks] = useImmer({
    'no-idea': [],
    learning: [],
    ready: [],
  });

  const [entry, setEntry] = useState({
    'no-idea': '',
    learning: '',
    ready: '',
  });
  const [showButton, setShowButton] = useImmer({});
  const [showInput, setShowInput] = useImmer({});
  const [validation, setValidation] = useState({});
  console.log(entry);

  function handleFormSubmit(event) {
    const e = event.target;
    event.preventDefault();
    // if (!entry) {
    //   setValidation(
    //     produce(validation, (draft) => {
    //       draft[e.id] = 'Enter a task';
    //     })
    //   );
    //   return;
    // }
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

  return (
    <Container>
      <Column
        title='NO IDEA'
        tasksList={tasks['no-idea'].map((item) => (
          <List
            key={item}
            item={item}
            column='no-idea'
            onNextClick={() =>
              setTasks(
                produce(tasks, (draft) => {
                  draft['learning'].push(item);
                  draft['no-idea'] = draft['no-idea'].filter((i) => i !== item);
                })
              )
            }
          />
        ))}
      >
        <AppForm
          showInput={showInput}
          entry={entry['no-idea']}
          onFormSubmit={handleFormSubmit}
          onShowInputClick={handleShowInputClick}
          onEntryChange={handleEntryChange}
          onCancelClick={handleCancelClick}
          id='no-idea'
          validation={validation['no-idea']}
        />
      </Column>
      <Column
        title='LEARNING'
        tasksList={tasks['learning'].map((item) => (
          <List
            key={item}
            item={item}
            column='learning'
            onNextClick={() =>
              setTasks(
                produce(tasks, (draft) => {
                  draft['ready'].push(item);
                  draft['learning'] = draft['learning'].filter(
                    (i) => i !== item
                  );
                })
              )
            }
          />
        ))}
      >
        <AppForm
          showInput={showInput}
          entry={entry['learning']}
          onFormSubmit={handleFormSubmit}
          onShowInputClick={handleShowInputClick}
          onEntryChange={handleEntryChange}
          onCancelClick={handleCancelClick}
          id='learning'
          validation={validation['learning']}
        />
      </Column>
      <Column
        title='READY'
        tasksList={tasks['ready'].map((item) => (
          <List
            key={item}
            item={item}
            column='ready'
            onNextClick={() =>
              setTasks(
                produce(tasks, (draft) => {
                  draft['ready'] = draft['ready'].filter((i) => i !== item);
                })
              )
            }
          />
        ))}
      >
        <AppForm
          showInput={showInput}
          entry={entry['ready']}
          onFormSubmit={handleFormSubmit}
          onShowInputClick={handleShowInputClick}
          onEntryChange={handleEntryChange}
          onCancelClick={handleCancelClick}
          id='ready'
          validation={validation['ready']}
        />
      </Column>
    </Container>
  );
}
