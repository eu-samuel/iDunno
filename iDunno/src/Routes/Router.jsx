import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Artists } from "../pages/SubPages/Artists";
import { Albums } from "../pages/SubPages/Albums";
import { Tracks } from "../pages/SubPages/Tracks";

export default function Router () {

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/artists" element={<Artists/>}/>
            <Route path="/albums" element={<Albums/>}/>
            <Route path="/tracks" element={<Tracks/>}/>
        </Routes>
        </BrowserRouter>
    )
}