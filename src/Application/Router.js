import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';
import Teamdetail from '../pages/Teamdetail';
import Calendar from '../pages/Calendar';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/aboutus' element={<Aboutus />} />
                <Route path='/teamdetail' element={<Teamdetail/>} />
                <Route path='/calendar' element={<Calendar/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    )
}
