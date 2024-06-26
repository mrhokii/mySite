import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"

import App from "./App";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/Movies" element={<Movies />}>

                        <Route path={':MovieId'} element={<Movie />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)