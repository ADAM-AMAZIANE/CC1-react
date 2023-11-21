import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calc from './components/comp1/Calc'; 
import ImageSlider from './components/comp2/ImageSlider';
import { SliderData } from './components/comp2/SliderData';
import TodoList from './components/comp3/TodoList'; 
import ContactForm from './components/comp4/ContactForm';
import Api from './components/comp5/APIpagination';
import NavBar from './components/comp6/NavBar';
import Langue from './components/comp7/langue';
import   Hi   from './components/comp8/Hi'

const App = () => {


  return (  

    <Router>
      <div >
      <center>
      <NavBar />
        



        <Routes>     
          <Route path="/" element={<Hi />} />
          <Route path="CC1-react/adam" element={<Hi />} />
          <Route path="/CC1-react/" element={<Hi />} />
          <Route path="/Calc" element={<Calc />} />
          <Route path="/ImageSlider" element={<ImageSlider slides={SliderData}/>} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Api" element={<Api />} />
          <Route path="/Langue" element={<Langue />} />
          <Route path="*" element={<> <h1>404</h1> </>} />
        </Routes>
        


        </center>
      </div>
    </Router>




  );
};

export default App;
