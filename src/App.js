// import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';

function App() {
  return (
    <div className="App">
      {/* <Profile name = "Jalez" lastName = "Okush" /> */}
      {/* <Profile name = "Becky" lastName = "Gichana" /> */}
      {/* <Profile name = "Walter" lastName = "Onzere" /> */}
      {/* <Message messageContent="This is a Class message" /> */}
    <Counter />
    {/* <Resume name = "Petro"/> */}
    {/* <FunctionEvent /> */}
    <ClassEvent />

    </div>
  );
}

export default App;
