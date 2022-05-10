import { aboutSections } from '../data/aboutData';
import '../css/about.css';


function About() {

    return (
        <main id="main">
            <div className="about__hero">
                <h1 className="about__title">Helping Girls and Women to Prioritise Their Peroid Health</h1>
            </div>
            
            <div className="about__sections">
                { aboutSections.map((section) => {
                    return (
                        <div 
                            key={section.id} 
                            id={section.id}
                            className={`section__${section.id}`}
                        >
                            <h2 className="section__title">{section.title}</h2>
                            <p className="section__content">{section.content}</p>
                            <ul className="contact__list">
                                { section.bullets && section.bullets.map((bullet) => {
                                    return (
                                        <li key={bullet.label} className="contact__item">
                                            <h3>{bullet.label}</h3>
                                            <a href={`mailto:${bullet.email}`}>{bullet.email}</a>
                                        </li>
                                    )                            
                                })}
                            </ul>
                        </div>
                    )                               
                })}
            </div>                 
        </main>
    );
}

export default About;