import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import { Suspense, useState } from 'react';
import { DarkTheme,  LightTheme } from "./styled";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Profile } from "./pages/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import Flights from "./pages/Flights";
import RentalCar from "./pages/RentalCar";
import HotelList from "./pages/HotelList";
import Details from "./pages/Details";
import 'swiper/swiper-bundle.css';
import './App.css'


const App = () => {

  const [theme, toggleTheme] = useState('light');

  return (
    <Suspense fallback ="loading">
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <div className="App">
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes> 
            <Routes>
              <Route path='/profile' element={<Profile/>}/>
            </Routes> 
            <Routes>
              <Route path='/flights' element={<Flights/>}/>
            </Routes> 
            <Routes>
              <Route path='/rental-car' element={<RentalCar />}/>
            </Routes> 
            <Routes>
              <Route path='/hotel-list' element={<HotelList />}/>
            </Routes> 
            <Routes>
              <Route path='/details' element={<Details />}/>
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
    </Suspense>
  );
}

export default App;
