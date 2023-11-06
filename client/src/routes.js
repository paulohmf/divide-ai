import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './pages/Login/Login'
import Main from "./pages/Main/Main";

function MainRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}>
            </Route>
            <Route path='/main' element={<Main/>}>
            </Route>
        </Routes></BrowserRouter>
        
    )
}

export default MainRoutes;