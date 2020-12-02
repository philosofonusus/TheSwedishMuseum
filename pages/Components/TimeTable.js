import styles from "../../styles/plan.module.scss";
const TimeTable = _ => {
    return(
        <div className={styles.plan}>
            <h2 className={styles.plan__title}>
                The premier destination for modern art in Northern Sweden. Open from 10 AM to 6 PM every day during the summer months.
            </h2>
            <div className={styles.plan__grid}>
                <div>
                    <img src={require('../../images/2020-three-quarters-1.png')} alt='three' />
                    <h3>
                        Works and Days
                    </h3>
                    <p>
                        August 1 — December 1
                    </p>
                    <button>READ MORE</button>
                </div>
                <div>
                    <img src={require('../../images/2020-three-quarters-2.png')} alt='four' />
                    <h3>
                        The Life I Deserve
                    </h3>
                    <p>
                        August 1 — December 1
                    </p>
                    <button>READ MORE</button>
                </div>
                <div>
                    <img src={require('../../images/2020-three-quarters-3.png')} alt='four' />
                    <h3>
                        Theatre of Operations
                    </h3>
                    <p>
                        October 1 — December 1
                    </p>
                    <button>READ MORE</button>
                </div>
                <div>
                    <img src={require('../../images/2020-three-quarters-4.png')} alt='four' />
                    <h3>
                        From Signac to Matisse
                    </h3>
                    <p>
                        October 1 — December 1
                    </p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
}
export default TimeTable