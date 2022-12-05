import { Routes, Route } from "react-router-dom"
import NewCoasterPage from "../pages/NewCoasterPage/NewCoasterPage";
import SignUp from "../pages/SignUp/SignUp"
import LogIn from "../pages/LogIn/LogIn"
import HomePage from "../pages/HomePage/HomePage";
import PropertiesListPage from "../pages/PropertiesListPage/PropertiesListPage";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-propety" element={<NewCoasterPage />} />
            <Route path="/properties" element={<PropertiesListPage />} />
            <Route path="/detalles/:houses_id" element={<p>detalles casa</p>} />
            <Route path="/hotels" element={<p>hoteles</p>} />
            <Route path="/detalles/:hotels_id" element={<p>detalles hotel</p>} />
            <Route path="/registro" element={<SignUp />} />
            <Route path="/acceder" element={<LogIn />} />
            <Route path="/perfil" element={<p>perfil</p>} />
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    );
}

export default AppRoutes;