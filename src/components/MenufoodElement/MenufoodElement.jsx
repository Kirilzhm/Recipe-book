import styles from "./MenufoodElement.module.css"
import menuCross from "/icons/menuCross.svg"

import { Link } from "react-router-dom";

const Menu =({onClose}) => {
    return (
        <div className={styles.background}>
            <div className={styles.box}>
                <div className={styles.recipeBox}>
                    <h3 className={styles.recipeText}>Рецепти</h3>
                </div>      
                <div className={styles.menuBox}>
                    <div className={styles.menuelementBox}>
                        <Link to="/MenuItemsPage" className={styles.menuText}>Салати</Link>
                    </div>
                    <div className={styles.menuelementBox}>
                        <Link to="/MenuItemsPage" className={styles.menuText}>Торти</Link>
                    </div>
                    <div className={styles.menuelementBox}>
                        <Link to="/MenuItemsPage" className={styles.menuText}>Солодощі</Link>
                    </div>
                    <div className={styles.menuelementBox}>
                        <Link to="/MenuItemsPage" className={styles.menuText}>Картопля</Link>
                    </div>
                    <div className={styles.menuelementBox}>
                        <Link to="/MenuItemsPage" className={styles.menuText}>Курка</Link>
                    </div>
                </div>
            </div>
            <button 
            className={styles.closeBtn}
            type="button"
            onClick={() => onClose()}>
                <img src={menuCross} alt="crosshair" />
            </button>
        </div>
    )
};

export default Menu;