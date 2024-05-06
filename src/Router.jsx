import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './templates/SignIn';
import Register from './templates/Register';

const Router = () => {
    return(
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/signin"} element={<SignIn />} />
                    <Route exact path={"/regiser"} element={<Register />} />
                    {/* 他のルート */}
                    <Route exact path="/" element={<SignIn />} />

                </Routes>
            </BrowserRouter>
    )
}

export default Router;