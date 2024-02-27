import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Nutrition from './Pages/Nutrition';
import Workout from './Pages/Workout';
import BMI from './Pages/BMI';
import BarBenders from './Component/images/barBenders.jpg'
import NDFitness from './Component/images/NDFitness.jpg'
import Ozone from './Component/images/ozoneFitness.jpg'
import Shaun_Stafford from './Component/images/expert1.jpg'
import Tracy_Anderson from './Component/images/expert2.webp'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Gyms from './Pages/Gyms';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        {/* <Home/> */}
        <Routes>
          <Route path="/" element={<Home gymName1= "Bar Benders" gymName2= "ND Fitness" gymName3= "OZONE Fitness Club" gymImg1={BarBenders}
          gymImg2={NDFitness}
          gymImg3={Ozone}
          expert1="Shaun Stafford"
          expert1Img={Shaun_Stafford}
          expert2="Tracy Anderson"
          expert2Img={Tracy_Anderson}
          />}></Route>
        </Routes>
        <Routes>
          <Route path="/Workout" element={<Workout />}></Route>
        </Routes>
        <Routes>
          <Route path="/Nutrition" element={<Nutrition />}></Route>
        </Routes>
        <Routes>
          <Route path="/BMI" element={<BMI />}></Route>
        </Routes>
        <Routes>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/Gyms" element={<Gyms />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
