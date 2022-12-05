import { Routes, Route } from "react-router-dom"
import SignUp from "../pages/SignUp/SignUp"
import LogIn from "../pages/LogIn/LogIn"
import HomePage from "../pages/HomePage/HomePage";
import PropertiesListPage from "../pages/PropertiesListPage/PropertiesListPage";
import NewPropertyPage from "../pages/NewPropertyPage/NewPropertyPage";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-propety" element={<NewPropertyPage />} />
            <Route path="/properties" element={<PropertiesListPage />} />
            <Route path="/detalles/:houses_id" element={<p>detalles casa</p>} />
            <Route path="/hotels" element={<p>hoteles</p>} />
            <Route path="/details/:hotels_id" element={<p>detalles hotel</p>} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/profile" element={<p>perfil</p>} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    );
}

export default AppRoutes;