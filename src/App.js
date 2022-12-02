import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';

import CarouselFadeExample from './Components/Slider';
import Content from './Components/Content';
import Services from './Components/Service';
import IndividualIntervalsExample from './Components/Slider';
import Event from './Components/Events';
import Notice from './Components/Notice';
import Footer from './Components/Footer';
import FrequentlyQuestion from './Components/question';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import NoticePage from './Components/notice/noticePage';
import Social from './Components/social/Social';
import RecentEvents from './Components/events/recentEvents';
import UpcomingEvents from './Components/events/upcomingEvents';

function App() {
  return (
    <>
      <Navigation></Navigation>

<Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/notice' element={<NoticePage></NoticePage>}></Route>
        <Route path='/socialmediacorner' element={<Social></Social>}></Route>
        <Route path='/recentevnet' element={<RecentEvents></RecentEvents>}></Route>
        <Route path='/upcomingevnet' element={<UpcomingEvents></UpcomingEvents>}></Route>
</Routes>
    <Footer></Footer>
  
       {/* <Notice></Notice> */}

      
    </>
  );
}

export default App;
