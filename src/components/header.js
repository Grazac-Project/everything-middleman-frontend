import Logo from "../assets/logo.jpeg"
import Navigation from "./Navigation/navigation"
const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src={Logo} alt="logo" className="header-img" />
                </div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header