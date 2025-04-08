import './App.css';

function App(){

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/faq">FAQ's</Link></li>
                    <li><Link to="/overview">Products and Services Overview</Link></li>
                    <li><Link to="/privacy_terms_and_conditions">Privacy & Terms and Conditions</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;