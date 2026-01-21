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
                        <p>Salats</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p>Cakes</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p>Sweets</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p>Poteto</p>
                    </div>
                    <div className={styles.menuelementBox}>
                        <p>Meet</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Menu;