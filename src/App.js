import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './components/Home'
import AddContact from './components/AddContact'
import EditComponents from './components/EditComponents'

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route path="/add" component={AddContact}>
        </Route>
        <Route path="/edit/:id" component={EditComponents}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
