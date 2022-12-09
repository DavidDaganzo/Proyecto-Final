import { Routes, Route } from "react-router-dom"
import LogInPage from "../pages/LogInPage/LogInPage"
import HomePage from "../pages/HomePage/HomePage";
import PropertiesListPage from "../pages/PropertiesListPage/PropertiesListPage";
import NewPropertyPage from "../pages/NewPropertyPage/NewPropertyPage";
import PropertyDetailsPage from "../pages/PropertyDetails/PropertyDetails";
import EditPropertyPage from "../pages/EditPropertyPage/EditPropertyPage";
import Map from "../components/Map/Map";
import Calendar from "../pages/CalendarPage/CalendarPage";
import SignupPage from "../pages/SignUpPage/SignUpPage";
import PrivateRoute from "./PrivateRoute";




const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/create-propety" element={<NewPropertyPage />} /> */}
            <Route path="/properties" element={<PropertiesListPage />} />
            <Route path="/detalles/:property_id" element={<PropertyDetailsPage />} />
            <Route path="/edit/:property_id" element={<EditPropertyPage />} />
            <Route path="/hotels" element={<p>hoteles</p>} />
            <Route path="/details/:hotels_id" element={<p>detalles hotel</p>} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/map" element={<Map />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/profile" element={<p>perfil</p>} />
            <Route path="/*" element={<h1>404</h1>} />

            <Route path="/create-propety" element={<PrivateRoute />}>
                <Route path="" element={<NewPropertyPage />} />
            </Route>

        </Routes >


    );
}

export default AppRoutes;