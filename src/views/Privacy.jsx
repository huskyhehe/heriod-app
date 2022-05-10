import { privacyPolicy } from "../data/privacyData";
import '../css/privacy.css';

function Privacy() {
    return (
        <main id="main">
            <div className="privacy__hero">
                <h1>Heriod Privacy Policy</h1>
                <h4>Effective as of 1 May 2022.</h4>
            </div>

            <div className="privacy__wrapper">
                { privacyPolicy.map((section) => {
                    return (
                        <div key={section.title} className="section">
                            <h2>{section.title}</h2>
                            <p>{section.summary}</p>   
                            { section.subsectionList.map((subsection) => {
                                return (
                                    <div key={subsection.subtitle} className="subsection">
                                        <h3> - {subsection.subtitle}</h3>
                                        <p>{subsection.description}</p>
                                        { subsection.bulletList.map((bullet) => {
                                            return (
                                                <div key={bullet.bulletTitle} className="bullet">
                                                    <h4> · {bullet.bulletTitle}</h4>     
                                                    <p>{bullet.bulletContent}</p>
                                                </div> 
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </main>    
    );
}

export default Privacy;
