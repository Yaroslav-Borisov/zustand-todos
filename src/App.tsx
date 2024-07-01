import './App.css';
import Filters from './components/filters/filters';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Header from './components/header/header';
import TodoList from './components/todoList/todoList';

function App() {
  return (
    <div className="container">
      <Header />
      <Filters />
      <TodoList />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
