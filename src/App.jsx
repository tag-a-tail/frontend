import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "@/pages/home/HomePage.jsx";
import AuthPage from "@/pages/auth/AuthPage.jsx";


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
            </Routes>
        </Router>
    )
}