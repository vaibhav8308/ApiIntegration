import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import Liked from './component/Liked';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
<Header/>
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
          
         
          <Route exact path="liked" element={<Liked/>}/>
         
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
