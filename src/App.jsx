
import {Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Tvshows from "./components/Tvshows";
import  Movies from "./components/Movies";
import Tdetails from "./components/Tdetails";
import Mdetails from "./components/Mdetails";
import Pdetails from "./components/Pdetails";





function App() {

  return (
    <>
      <div className="w-screen flex  h-screen bg-[#1F1E24]">

        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/popular/details/:id" element={<Pdetails/>}/>

          <Route path="/tv" element={<Tvshows/>}/>

          <Route path="tv/details/:id" element={<Tdetails/>}/>



          <Route path="/movie" element={<Movies/>}/>
          <Route path="/movie/details/:id" element={<Mdetails/>}/>
        </Routes>

         
      </div>
    </>
  )
}

export default App
