import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <h1>E-WALLET</h1>
            <Link to="/cards">Cards</Link>
            <br />
            <Link to="/addcard">Add Cards</Link>
        </header>
    );
};
