import landscape2 from '../../images/2020-landscape-2.png'
import styles from '../../styles/aboutMain.module.scss'

const About = () => {
    return(
        <section className={styles.about}>
            <img className={styles.about__landscape} src={landscape2}  alt="landscape2"/>
            <h1 className={styles.about__lyric}>
                “Cyborgs, as the philosopher Donna Haraway established, are not reverent. They do not remember the cosmos.”
            </h1>
            <div className={styles.about__text}>
                <p>
                    With seven floors of striking architecture, UMoMA shows exhibitions of international contemporary art, sometimes along with art historical retrospectives. Existential, political and philosophical issues are intrinsic to our programme. As visitor you are invited to guided tours artist talks, lectures, film screenings and other events with free admission
                </p>
                <p>
                    The exhibitions are produced by UMoMA in collaboration with artists and museums around the world and they often attract international attention. UMoMA has received a Special Commendation from the European Museum of the Year, and was among the top candidates for the Swedish Museum of the Year Award as well as for the Council of Europe Museum Prize.
                </p>
            </div>
        </section>
    )
}
export default About