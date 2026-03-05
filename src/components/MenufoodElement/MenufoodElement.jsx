import styles from "./MenufoodElement.module.css"
import menuCross from "/icons/menuCross.svg"

const Menu =({onClose}) => {
    return (
        <div className={styles.background}>
            <div className={styles.box}>
                <div className={styles.recipeBox}>
                    <h3 className={styles.recipeText}>Рецепти</h3>
                </div>      
                <div className={styles.menuBox}>
                    <div className={styles.menuelementBox}>
                        <p className={styles.menuText}>Салати</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p className={styles.menuText}>Торти</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p className={styles.menuText}>Солодощі</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p className={styles.menuText}>Картопля</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p className={styles.menuText}>Курка</p>
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