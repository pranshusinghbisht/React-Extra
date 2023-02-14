import logo from './logo.svg';
import './App.css';
import Header from './components/header';

function App() {
    // return <h1>This is my first react js Application</h1>;

    return (
      <div style={{background: "red"}}>

        <Header name="pranshu" title="First Header"/>
        <h1>This is my react app</h1>
        <Header name="Rekha" title="Second Header"/>
        <p>This is p </p>
        <p>React does not allows to make parallel tag together. but it will work when we incapuslate inside div tag</p>
        <Header name="hrithik" title="Third Header"/>
      </div>

      
    )
}

export default App;
