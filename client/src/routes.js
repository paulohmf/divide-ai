import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './pages/Login/Login'
import Main from "./pages/Main/Main";
import Groups from "./pages/Groups/Groups";
import Expenses from "./pages/Expenses/Expenses";
import ExpensesR from "./pages/ExpensesRegister/ExpensesRegister";

function MainRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}>
            </Route>
            <Route path='/main' element={<Groups/>}>
            </Route>
            <Route path='/groups' element={<Main/>}>
            </Route>
            <Route path='/expensesRegister' element={<ExpensesR/>}>
            </Route>
            <Route path='/expenses' element={<Expenses/>}>
            </Route>
        </Routes></BrowserRouter>
        
    )
}

export default MainRoutes;