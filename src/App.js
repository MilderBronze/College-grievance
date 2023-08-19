import "./App.css";
import Login from "./pages/Login";
// import Navbar from './components/common/Navbar';
import { Route, Routes } from "react-router-dom";
import Grievance from "./pages/Grievance";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/user/:id" element={<Grievance />} />
            </Routes>
        </div>
    );
}

export default App;
