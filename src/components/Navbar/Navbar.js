/* Navbar will have links to navigate to git hub repo and dark mode option   */
const Navbar = ({toggleTheme}) => {
    return (
        <div className="navbar-container">
            <ul>
                <li><button onClick={console.log}>Home</button></li>
                <li><button onClick={() => window.open('https://github.com/', "_blank")}>Git Hub</button></li>
            </ul>
            {/* here goes the code for dark mode */}
            <div className="switch" onClick={toggleTheme}>
                <i className="fa fa-adjust" style={{fontSize:'25px'}}></i>
            </div>
        </div>
    );
}
 
export default Navbar;
