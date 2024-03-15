import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
    const { authUser } = useAuthContext();
    return (
        <div className="dark:bg-gray-800">
            <Routes>
                <Route path="/" Component={Login} />
                <Route path="/signup" Component={SignUp} />
            </Routes>
            <Toaster position="top-center" />
        </div>
    );
}

export default App;
