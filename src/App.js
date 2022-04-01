import { useImmer } from 'use-immer';
import produce from 'immer';
import './index.scss';
import Column from './Column';
import List from './List';
import Container from './Container';
import GenericAddButton from './GenericAddButton';

export default function App() {
  const [columns, setColumns] = useImmer([]);

  function handleFormSubmit(value, index) {
    setColumns(
      produce(columns, (draft) => {
        draft[index].tasks.push(value);
      })
    );
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
    setColumns((draft) => {
      draft.push({ title: value, tasks: [] });
    });
  }

  const listColumns = columns.map((column, indexCol, arrayCol) => (
    <Column
      onMovePrevColumnClick={() => {
        setColumns(() =>
          produce(columns, (draft) => {
            draft.splice(indexCol, 1);
            draft.splice(indexCol - 1, 0, column);
          })
        );
      }}
      onMoveNextColumnClick={() => {
        setColumns(() =>
          produce(columns, (draft) => {
            draft.splice(indexCol, 1);
            draft.splice(indexCol + 1, 0, column);
          })
        );
      }}
      key={column.title}
      last={indexCol === arrayCol.length - 1}
      title={column.title}
      index={indexCol}
      column={indexCol}
      onFormSubmit={(value) => handleFormSubmit(value, indexCol)}
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
        labelName='Column'
      />
    </Container>
  );
}
