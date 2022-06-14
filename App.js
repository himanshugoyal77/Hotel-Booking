import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Login from './pages/login/Login';
import './app.css';

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" exact={true} element={<Home/>}></Route>
         <Route path="/hotels" element={<List/>}></Route>
         <Route path="/hotels/:id" element={<Hotel/>}></Route>
         <Route path="/login" element={<Login/>}></Route>

         
       </Routes>
    </Router>
  );
}

export default App;
