import Button from './Button';
import styles from './css/App.module.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    setToDos((currentArray) => [todo, ...currentArray]);
    setTodo('');
  };
  console.log(todos);
  return (
    <div>
      <h1>My ToDos {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type='text'
          placeholder='write your to do..'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
