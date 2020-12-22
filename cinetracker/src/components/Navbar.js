import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo right" style={{ marginRight: 30 }}>Cine Tracker</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="sass.html">Popular Shows</a></li>
                        <li><a href="badges.html">TV Shows</a></li>
                        <li><a href="collapsible.html">Profile</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

