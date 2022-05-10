import { useState } from 'react';
import TabItem from './TabItem';


function Tabs( {tabItems} ) {

    const [active, setActive] = useState(0);
    
    return (
        <div className="tabs__wrapper">
            <div className="tabs">
                { tabItems.map(({ id, title }) => <TabItem
                    key={title}
                    title={title}
                    onItemClicked={() => setActive(id)}
                    isActive={active === id}
                />
            )}
            </div>
            <div className="tabitem__content">
                {tabItems.map(({ id, content }) => {
                    return active === id ? content : ''
                })}
            </div>
        </div>
    );
}

export default Tabs;