import { useState } from 'react';
import Accordion from '../components/Accordion';
import { factsSections, defaultFAQs } from '../data/factsData'
import hero from '../assets/hero.png';
import '../css/facts.css';


function Facts() { 

    const [faqs] = useState(defaultFAQs);

    return (
        <main id="main">
            <div className="hero">
                <div className="hero__wrapper">
                    <div className="hero__title">
                        <h2>All About</h2>
                        <h1>Menstrual</h1>
                        <h1>Periods</h1>
                        <h3>We are here to help</h3>
                    </div>
                    <img className="hero__img" src={hero} alt="banner"/>    
                </div>
            </div>    

            { factsSections.map((section) => {
                return (
                    <div 
                        key={section.id}
                        id={section.id}
                        className={`section__${section.id}`}
                    >
                        <h2 className="section__title">{section.title}</h2>                        
                        <p className="section__content">{section.content}</p>
                    </div>    
                )
            })}   
            
            <div id="faq-for-teens" 
                className="section__faq-for-teens"
            >
                <h2 className="section__title">Frequently Asked Questions for Teen girls</h2>
                <Accordion entries={faqs} />
            </div>         
        </main> 
    );
}

export default Facts;