import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page from '../app/page'
import Main from '../components/Main'




const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Page/>}>
                        <Route index element={<Main />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router