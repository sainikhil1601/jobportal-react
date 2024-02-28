import logo from './logo.svg';
import './App.css';
import { Router,Routes,BrowserRouter, Route } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import Company from './Components/Company/Company';
import Student from './Components/Student/Student';
import Home from './Components/Home/Home';
import InsertStudent from './Components/Student/InsertStudent';
import InsertCompany from './Components/Company/InsertCompany'; 
import PostJob from './Components/Company/PostJob';
import InsertInterview from './Components/Company/InsertInterView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/admin' Component={Admin} />
        <Route path='/company' Component={Company} />
        <Route path='/student' Component={Student} />
        <Route path='/student/insertstudent' Component={InsertStudent} /> 
        <Route path='/company/insertcompany' Component={InsertCompany} />
        <Route path='/company/postjob' Component={PostJob} />
        <Route path='/company/insertview/:appliedJob' Component={InsertInterview} />
        <Route path='/admin' Component={Admin} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
