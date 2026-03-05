import Menu from "../../components/MenufoodElement/MenufoodElement.jsx";

import { useState } from "react";

const HomePage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div> 
            <div>
                <button onClick={() => setIsMenuOpen(true)}>Open Menu</button>
                {isMenuOpen && <Menu onClose={closeMenu} />}
            </div>
        </div>
    )
};

export default HomePage;