import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Profile/>} />
                        <Route path='/dialogs' element={<Dialogs/>} />
                        <Route path='/news' Component={News} />
                        <Route path='/music' Component={Music} />
                        <Route path='/settings' Component={Settings} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
