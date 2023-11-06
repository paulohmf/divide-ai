import { Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login'

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}>
            </Route>
        </Routes>
    )
}

export default MainRoutes;