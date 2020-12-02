import NavBar from "./Components/NavBar";
import styles from '../styles/container.module.scss'
import TimeTable from "./Components/TimeTable";
import Head from "next/head";
import About from './Components/About'

const Index= _ => {
    return(
        <>
            <Head>
                <meta name="viewport" content="width=1250, initial-scale=0" />
                <title>Swedish Museum</title>
            </Head>
            <NavBar />
            <main>
                <section className={styles.container}>
                    <div className={styles.container__entry}>
                        <h1 className={styles.container__title}>
                            Welcome to the Swedish Museum of Modern Art
                        </h1>
                        <img className={styles.container__landscape} src={require('../images/2020-landscape-1.png')} alt="main_landscape"/>
                    </div>
                    <TimeTable />
                </section>
                <About />
            </main>
            </>
    )
}
export default Index;