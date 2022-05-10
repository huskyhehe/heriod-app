function Report({ formData, predictedData, absoluteDate }) {

    const reportData = [
        {
            label: `Your recent period start date is: `,
            content: `${absoluteDate.toDateString().slice(0,10)}`,
        },
        {
            label: `Your menstrual cycle is:`,
            content: `${formData.cycle} days`,
        },
        {
            label: `Your period usually lasts for: `,
            content: `${formData.period} days`,
        },
    ];


    return (
        <div className="tracker__report">           
            <div className="input__summary">
                <h3>Your Input:</h3>
                <div className="summary__list">
                    { reportData.map(bullet => {
                        return (
                            <li key={bullet.label} className="summary__bullet">
                                <p className="bullet__label">{bullet.label}</p>
                                <p className="bullet__content">{bullet.content}</p>
                            </li>
                        )
                    })}
                </div>      
            </div>

            <div className="prediction">
                <h3>Your Next 3 Months' Periods:</h3>
                <p className="prediction__tip">Please note that this is an assessment of your menstrual cycle only.</p>
                <div className="prediction__list">       
                    { predictedData.map(date => {
                        return (
                            <li key={date[0]} className="prediction__bullet">
                                <p className="date__label">Start date:</p>
                                <p className="date__text">{date[0].toDateString().slice(0,10)}</p>
                                <p className="arrow__icon"></p>
                                <p className="date__label">End date:</p>
                                <p className="date__text">{date[1].toDateString().slice(0,10)}</p>
                            </li>
                        )
                    })}           
                </div>
            </div>                    
        </div>   
    );
}

export default Report;
