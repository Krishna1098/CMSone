import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './ConfigureStore/store';
import {Home} from './Home/Home';
import {Contact} from './Pages/Contact';
import MyContacts from './Pages/MyContacts';
import { Card } from './Pages/Cards';
import { Project } from './Pages/Project';
import { Form } from './Pages/Form';
import { About } from './Pages/About';


const baseURL="http://localhost:50100/api";
  axios.defaults.baseURL=baseURL;
  //axios.defaults.headers.post["Content-Type"]="multipart/form-data";
  axios.defaults.headers.post["Access-Control-Allow-Origin"]="*";
  axios.defaults.headers.post["Access-Control-Allow-Header"]="Origin, X-Requested-with, Content-Type, Accept";
  axios.defaults.headers.post["Access-Control-Allow-Methods"]="GET,HEAD,POST,PUT,PATCH,DELETE";

function App() {
  return (
    <Provider store={store}>
    
    <div className="App">
     <nav className="Nav">
        <Router>
        <Routes>
        <Route exact path="/" element={<SignIn/>}/>
          <Route  path="/signin" element={<SignIn/>}/>
          <Route  path="/signup" element={<SignUp/>}/>
          <Route  exact path="/home" element={<Home/>}/>
          <Route  exact path="/contact" element={<Contact/>}/>
          <Route  exact path="/contacts" element={<MyContacts/>}/>
          <Route  exact path="/cards" element={<Card/>}/>
          <Route  exact path="/projects" element={<Project/>}/>
          <Route  exact path="/forms" element={<Form/>}/>
          <Route  exact path="/about" element={<About/>}/>



        </Routes>
    </Router>
      </nav>
    </div>
    </Provider>
  );
}

export default App;
