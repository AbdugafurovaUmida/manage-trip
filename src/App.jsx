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
import HotelPayment from "./pages/HotelPayment";
import Congralutions from "./pages/Congralutions";
import Notfound from "./components/Notfound";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {

  const [theme, toggleTheme] = useState('light');

  return (
    <Suspense fallback ="loading">
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <div className="App">
          <BrowserRouter>
            <ScrollToTop />
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/flights' element={<Flights/>}/>
              <Route path='/rental-car' element={<RentalCar />}/>
              <Route path='/hotel-list' element={<HotelList />}/>
              <Route path='/details/:id' element={<Details />}/>
              <Route path='/hotel-payment/:id' element={<HotelPayment/>}/>
              <Route path='/congrulation/:id' element={<Congralutions />}/>
              <Route path='*' element={<Notfound />}/>
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
