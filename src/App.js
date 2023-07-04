// import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile name = "Jalez" lastName = "Okush" />
      <Profile name = "Becky" lastName = "Gichana" />
      <Profile name = "Walter" lastName = "Onzere" />
      <Message messageContent="This is a Class message" />


    </div>
  );
}

export default App;
