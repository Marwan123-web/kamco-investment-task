import "./App.scss";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import Customers from "./components/customerList/Customers";
import Navbar from "./components/navBar/Navbar";
import SideMenu from "./components/sideMenu/SideMenu";
import setting from "./assets/images/menu/settinggray.svg";
import flag from "./assets/images/menu/flag.svg";
import users from "./assets/images/menu/profile-2user.svg";
import user from "./assets/images/menu/user-square.svg";
import dashboard from "./assets/images/menu/chart-square.svg";
import arrowright from "./assets/images/arrow-right.svg";
import arrowleft from "./assets/images/arrow-left.svg";
import { useState } from "react";
import { useAppSelector } from "./redux-toolkit/hooks";
function App() {
    const { t, i18n } = useTranslation("common");

    let menuItems = [
        { id: 1, name: "Dashboard", image: dashboard, hasChildren: false },
        { id: 2, name: "Customers", image: users, hasChildren: true },
        { id: 3, name: "Backend users", image: user, hasChildren: true },
        { id: 4, name: "Master data", image: flag, hasChildren: true },
        { id: 5, name: "Configuration", image: setting, hasChildren: false },
    ];
    const usersList = useAppSelector((state: any) => state.users);

    let tableHeader = ["#", "Full  name", "Email", "Mobile number", "Account #", "Status", "Last login"];

    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="app" dir={i18n.language === "en" ? "ltr" : "rtl"}>
            <div className="navbar">
                <Navbar />
            </div>

            <div className={`side-menu ${menuOpen ? "open" : "close"}`} id="menu">
                <img
                    src={menuOpen ? arrowleft : arrowright}
                    alt="menu icon"
                    className="toggle-button"
                    onClick={toggleMenu}
                />
                <SideMenu links={menuItems} />
            </div>

            <div className={`main-content ${menuOpen ? "close" : "open"}`}>
                <div className="content">
                    <Routes>
                        <Route path="/customers" element={<Customers headers={tableHeader} data={usersList.items} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
