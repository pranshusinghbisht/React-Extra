import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Header from './components/Header';
import Course from './components/Course';
import Allcourse from './components/Allcourses';

function App() {

  const btnHandle = () => {
    toast("This is my first message")
    toast.success("Done", {
      position: "top-center"
    })

    toast.error("Error", {
      position: "bottom-left"
    })
  }

  return (

    <div>
      <ToastContainer />
      <Header/>
    <h1>My Simple App</h1>
    <p>This is bootstrap component</p>
    <Button color='primary' outline onClick={btnHandle}>First React Button</Button>

    <Home/>
    
    <Course/>

    <Allcourse/>

    </div>

  );
}

export default App;
