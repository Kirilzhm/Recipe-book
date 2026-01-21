import styles from "./MenufoodElement.module.css"

const Menu =() => {
    return (
        <div className={styles.background}>
            <div className={styles.box}>
                <div className={styles.recipeBox}>
                    <h3 className={styles.recipeText}>Recipes</h3>
                </div>      
                <div className={styles.menuBox}>
                    <div className={styles.menuelementBox}>
                        <p className={styles.menuText}>Salats</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p className={styles.menuText}>Cakes</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p className={styles.menuText}>Sweets</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p className={styles.menuText}>Potato</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p className={styles.menuText}>Meet</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Menu;