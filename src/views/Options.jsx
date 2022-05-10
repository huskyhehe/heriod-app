import Tabs from '../components/Tabs';
import { optionsSummary, productOptions, padTypes } from '../data/optionsData';
import '../css/options.css';


function Options() {

    return (
        <main id="main">
            <div className="options__summary">
                <h1 className="summary__title">{optionsSummary.title}</h1>
                <p className="summary__content">{optionsSummary.content}</p>
            </div>
            
            { productOptions.map((option) => {
                return (
                    <div key={option.id} id={option.id} className={`section__${option.id}`}>
                        <h2 className="option__title">{option.title}</h2>
                        <div className="option__content">
                            <div className="option__detail">
                                <p className="option__description">{option.description}</p>
                                <img 
                                    className="option__img__pad" 
                                    src={require(`../assets/${option.img}`)}
                                    alt={`${option.id}-illustration`}
                                />
                            </div>    
                            <div className="option__detail">
                                <div className="pros-cons">       
                                    <h4 className="subtitle">Pros:</h4>
                                    <p>{option.pros}</p>
                                    <h4 className="subtitle">Cons:</h4>
                                    <p>{option.cons}</p>
                                </div>
                                <img 
                                    className="option__img__web" 
                                    src={require(`../assets/${option.img}`)}
                                    alt={`${option.id}-illustration`}
                                />
                            </div>   
                        </div>                        
                        
                        { option.id === 'sanitary-pads' && <Tabs tabItems={padTypes}/> }                  
                    </div>
                )
            }) }
        </main>
    );
}

export default Options;