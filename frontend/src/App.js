import './App.css';
import TaskList from './components/TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Task from './components/Task';
// require('dotenv').config();

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {

  // const Notify = () => toast("Wow it's so easy");

  return (
    <div className="app">
      <div className=" task-container">
        <TaskList />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
