import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import TodosList from './components/TodosList';
import { Provider } from "react-redux";
import { deleteAll, persistTodos } from './redux/action/addTodo.action';
import { connect } from 'react-redux';

const App = ({deleteAll, persistTodos}) => {
  
  useEffect(() => {
    persistTodos();
  }, [persistTodos])

  return (
    <div className="App">
      <h1>To do app</h1>
      <InputField />
      <TodosList />
      <div>
        <button onClick={() => deleteAll()}>Delete All</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteAll : () => dispatch(deleteAll()),
  persistTodos : () => dispatch(persistTodos()) 
})

export default connect(null, mapDispatchToProps)(App);
