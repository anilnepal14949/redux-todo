import './App.css';
import AddTodo from './components/addTodo/AddTodo';
import ListTodos from './components/listTodos/ListTodos';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ListTodos />
    </div>
  );
}

export default App;
